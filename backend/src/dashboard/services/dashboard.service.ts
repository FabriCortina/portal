import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { DashboardMetricsDto, RoleDistributionDto, ProvinceDistributionDto, HistoricalMetricsDto } from '../dto/dashboard-metrics.dto';

interface MarketMetrics {
  value: number;
  [key: string]: any;
}

@Injectable()
export class DashboardService {
  private readonly logger = new Logger(DashboardService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getDashboardMetrics(tenantId: string): Promise<DashboardMetricsDto> {
    const [
      activeCollaborators,
      roleDistribution,
      provinceDistribution,
      turnoverRate,
      satisfactionRate,
      historicalMetrics
    ] = await Promise.all([
      this.getTotalActiveCollaborators(tenantId),
      this.getRoleDistribution(tenantId),
      this.getProvinceDistribution(tenantId),
      this.getAverageTurnoverRate(tenantId),
      this.getAverageSatisfactionRate(tenantId),
      this.getHistoricalMetrics(tenantId)
    ]);

    return {
      totalActiveCollaborators: activeCollaborators,
      averageTurnoverRate: turnoverRate,
      averageSatisfactionRate: satisfactionRate,
      roleDistribution,
      provinceDistribution,
      historicalMetrics
    };
  }

  private async getTotalActiveCollaborators(tenantId: string): Promise<number> {
    return this.prisma.collaborator.count({
      where: {
        AND: [
          { tenantId },
          { isActive: true }
        ]
      }
    });
  }

  private async getRoleDistribution(tenantId: string): Promise<RoleDistributionDto[]> {
    const collaborators = await this.prisma.collaborator.findMany({
      where: {
        AND: [
          { tenantId },
          { isActive: true }
        ]
      },
      select: {
        role: true
      }
    });

    const roleCount = collaborators.reduce((acc, curr) => {
      acc[curr.role] = (acc[curr.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const total = Object.values(roleCount).reduce((sum, count) => sum + count, 0);

    return Object.entries(roleCount).map(([role, count]) => ({
      role,
      count,
      percentage: (count / total) * 100
    }));
  }

  private async getProvinceDistribution(tenantId: string): Promise<ProvinceDistributionDto[]> {
    const collaborators = await this.prisma.collaborator.findMany({
      where: {
        AND: [
          { tenantId },
          { isActive: true }
        ]
      },
      select: {
        province: true
      }
    });

    const provinceCount = collaborators.reduce((acc, curr) => {
      if (curr.province) {
        acc[curr.province] = (acc[curr.province] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const total = Object.values(provinceCount).reduce((sum, count) => sum + count, 0);

    return Object.entries(provinceCount).map(([province, count]) => ({
      province,
      count,
      percentage: (count / total) * 100
    }));
  }

  private async getAverageTurnoverRate(tenantId: string): Promise<number> {
    const turnoverMetrics = await this.prisma.metric.findMany({
      where: {
        AND: [
          { tenantId },
          { type: 'turnover' },
          { marketMetrics: { not: null } }
        ]
      },
      select: {
        marketMetrics: true
      }
    });

    if (turnoverMetrics.length === 0) {
      return 0;
    }

    const validMetrics = turnoverMetrics.filter(metric => 
      metric.marketMetrics && typeof (metric.marketMetrics as MarketMetrics).value === 'number'
    );

    if (validMetrics.length === 0) {
      return 0;
    }

    return validMetrics.reduce((sum, metric) => 
      sum + (metric.marketMetrics as MarketMetrics).value, 0
    ) / validMetrics.length;
  }

  private async getAverageSatisfactionRate(tenantId: string): Promise<number> {
    const satisfactionMetrics = await this.prisma.metric.findMany({
      where: {
        AND: [
          { tenantId },
          { type: 'satisfaction' },
          { marketMetrics: { not: null } }
        ]
      },
      select: {
        marketMetrics: true
      }
    });

    if (satisfactionMetrics.length === 0) {
      return 0;
    }

    const validMetrics = satisfactionMetrics.filter(metric => 
      metric.marketMetrics && typeof (metric.marketMetrics as MarketMetrics).value === 'number'
    );

    if (validMetrics.length === 0) {
      return 0;
    }

    return validMetrics.reduce((sum, metric) => 
      sum + (metric.marketMetrics as MarketMetrics).value, 0
    ) / validMetrics.length;
  }

  private async getHistoricalMetrics(tenantId: string): Promise<HistoricalMetricsDto[]> {
    const metrics = await this.prisma.metric.findMany({
      where: {
        AND: [
          { tenantId },
          { marketMetrics: { not: null } }
        ]
      },
      select: {
        type: true,
        value: true,
        marketMetrics: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    const monthlyData = new Map<string, {
      turnoverRate: number;
      satisfactionRate: number;
    }>();

    metrics.forEach(metric => {
      if (!metric.marketMetrics) return;

      const monthKey = new Date(metric.createdAt).toISOString().slice(0, 7);
      const marketMetrics = metric.marketMetrics as MarketMetrics;

      if (!monthlyData.has(monthKey)) {
        monthlyData.set(monthKey, {
          turnoverRate: 0,
          satisfactionRate: 0
        });
      }

      if (metric.type === 'turnover' && typeof marketMetrics.value === 'number') {
        monthlyData.get(monthKey)!.turnoverRate = marketMetrics.value;
      } else if (metric.type === 'satisfaction' && typeof marketMetrics.value === 'number') {
        monthlyData.get(monthKey)!.satisfactionRate = marketMetrics.value;
      }
    });

    return Array.from(monthlyData.entries()).map(([month, data]) => ({
      month,
      ...data
    }));
  }

  async getMetricsByTenant(tenantId: string): Promise<MetricData[]> {
    try {
      const metrics = await this.prisma.metric.findMany({
        where: { tenantId },
        orderBy: { createdAt: 'desc' },
      });

      return metrics.map(metric => ({
        type: metric.type,
        value: metric.value,
        marketMetrics: metric.marketMetrics as Record<string, any> || undefined,
      }));
    } catch (error) {
      this.logger.error(`Error getting metrics: ${error.message}`);
      throw error;
    }
  }

  async getMetricsByClient(tenantId: string, clientId: string): Promise<MetricData[]> {
    try {
      const metrics = await this.prisma.metric.findMany({
        where: { 
          tenantId,
          clientId,
        },
        orderBy: { createdAt: 'desc' },
      });

      return metrics.map(metric => ({
        type: metric.type,
        value: metric.value,
        marketMetrics: metric.marketMetrics as Record<string, any> || undefined,
      }));
    } catch (error) {
      this.logger.error(`Error getting client metrics: ${error.message}`);
      throw error;
    }
  }

  async calculateTurnoverRate(tenantId: string): Promise<number> {
    try {
      const metrics = await this.prisma.metric.findMany({
        where: {
          tenantId,
          type: 'turnover',
        },
        orderBy: { createdAt: 'desc' },
        take: 1,
      });

      if (metrics.length === 0) {
        return 0;
      }

      return metrics[0].value;
    } catch (error) {
      this.logger.error(`Error calculating turnover rate: ${error.message}`);
      throw error;
    }
  }

  async calculateSatisfactionRate(tenantId: string): Promise<number> {
    try {
      const metrics = await this.prisma.metric.findMany({
        where: {
          tenantId,
          type: 'satisfaction',
        },
        orderBy: { createdAt: 'desc' },
        take: 1,
      });

      if (metrics.length === 0) {
        return 0;
      }

      return metrics[0].value;
    } catch (error) {
      this.logger.error(`Error calculating satisfaction rate: ${error.message}`);
      throw error;
    }
  }

  async calculateSprintCompletionRate(tenantId: string): Promise<number> {
    try {
      const metrics = await this.prisma.metric.findMany({
        where: {
          tenantId,
          type: 'sprint_completion',
        },
        orderBy: { createdAt: 'desc' },
        take: 1,
      });

      if (metrics.length === 0) {
        return 0;
      }

      return metrics[0].value;
    } catch (error) {
      this.logger.error(`Error calculating sprint completion rate: ${error.message}`);
      throw error;
    }
  }

  async calculateBugRate(tenantId: string): Promise<number> {
    try {
      const metrics = await this.prisma.metric.findMany({
        where: {
          tenantId,
          type: 'bug_rate',
        },
        orderBy: { createdAt: 'desc' },
        take: 1,
      });

      if (metrics.length === 0) {
        return 0;
      }

      return metrics[0].value;
    } catch (error) {
      this.logger.error(`Error calculating bug rate: ${error.message}`);
      throw error;
    }
  }

  async getMarketMetrics(tenantId: string): Promise<Record<string, any>> {
    try {
      const metrics = await this.prisma.metric.findMany({
        where: {
          tenantId,
          type: 'market_metrics',
        },
        orderBy: { createdAt: 'desc' },
        take: 1,
      });

      if (metrics.length === 0 || !metrics[0].marketMetrics) {
        return {};
      }

      return metrics[0].marketMetrics as Record<string, any>;
    } catch (error) {
      this.logger.error(`Error getting market metrics: ${error.message}`);
      throw error;
    }
  }

  async getDashboardData(tenantId: string): Promise<{
    turnoverRate: number;
    satisfactionRate: number;
    sprintCompletionRate: number;
    bugRate: number;
    marketMetrics: Record<string, any>;
  }> {
    try {
      const [
        turnoverRate,
        satisfactionRate,
        sprintCompletionRate,
        bugRate,
        marketMetrics,
      ] = await Promise.all([
        this.calculateTurnoverRate(tenantId),
        this.calculateSatisfactionRate(tenantId),
        this.calculateSprintCompletionRate(tenantId),
        this.calculateBugRate(tenantId),
        this.getMarketMetrics(tenantId),
      ]);

      return {
        turnoverRate,
        satisfactionRate,
        sprintCompletionRate,
        bugRate,
        marketMetrics,
      };
    } catch (error) {
      this.logger.error(`Error getting dashboard data: ${error.message}`);
      throw error;
    }
  }
} 