import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { DashboardMetricsDto, RoleDistributionDto, ProvinceDistributionDto, HistoricalMetricsDto } from '../dto/dashboard-metrics.dto';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

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
        tenantId,
        isActive: true
      }
    });
  }

  private async getRoleDistribution(tenantId: string): Promise<RoleDistributionDto[]> {
    const collaborators = await this.prisma.collaborator.groupBy({
      by: ['role'],
      where: {
        tenantId,
        isActive: true
      },
      _count: {
        role: true
      }
    });

    const total = collaborators.reduce((sum, item) => sum + item._count.role, 0);

    return collaborators.map(item => ({
      role: item.role,
      count: item._count.role,
      percentage: (item._count.role / total) * 100
    }));
  }

  private async getProvinceDistribution(tenantId: string): Promise<ProvinceDistributionDto[]> {
    const collaborators = await this.prisma.collaborator.groupBy({
      by: ['province'],
      where: {
        tenantId,
        isActive: true
      },
      _count: {
        province: true
      }
    });

    const total = collaborators.reduce((sum, item) => sum + item._count.province, 0);

    return collaborators.map(item => ({
      province: item.province,
      count: item._count.province,
      percentage: (item._count.province / total) * 100
    }));
  }

  private async getAverageTurnoverRate(tenantId: string): Promise<number> {
    const turnoverMetrics = await this.prisma.metric.findMany({
      where: {
        tenantId,
        marketMetrics: {
          path: ['type'],
          equals: 'TURNOVER_RATE'
        },
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 12))
        }
      },
      select: {
        marketMetrics: true
      }
    });

    if (!turnoverMetrics.length) return 0;
    return turnoverMetrics.reduce((sum, metric) => sum + (metric.marketMetrics as any).value, 0) / turnoverMetrics.length;
  }

  private async getAverageSatisfactionRate(tenantId: string): Promise<number> {
    const satisfactionMetrics = await this.prisma.metric.findMany({
      where: {
        tenantId,
        marketMetrics: {
          path: ['type'],
          equals: 'SATISFACTION_RATE'
        },
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 12))
        }
      },
      select: {
        marketMetrics: true
      }
    });

    if (!satisfactionMetrics.length) return 0;
    return satisfactionMetrics.reduce((sum, metric) => sum + (metric.marketMetrics as any).value, 0) / satisfactionMetrics.length;
  }

  private async getHistoricalMetrics(tenantId: string): Promise<HistoricalMetricsDto[]> {
    const startDate = new Date(new Date().setMonth(new Date().getMonth() - 12));
    
    const [activeCollaborators, turnoverMetrics, satisfactionMetrics] = await Promise.all([
      this.prisma.collaborator.groupBy({
        by: ['createdAt'],
        where: {
          tenantId,
          isActive: true,
          createdAt: { gte: startDate }
        },
        _count: true
      }),
      this.prisma.metric.findMany({
        where: {
          tenantId,
          marketMetrics: {
            path: ['type'],
            equals: 'TURNOVER_RATE'
          },
          createdAt: { gte: startDate }
        },
        select: {
          marketMetrics: true,
          createdAt: true
        }
      }),
      this.prisma.metric.findMany({
        where: {
          tenantId,
          marketMetrics: {
            path: ['type'],
            equals: 'SATISFACTION_RATE'
          },
          createdAt: { gte: startDate }
        },
        select: {
          marketMetrics: true,
          createdAt: true
        }
      })
    ]);

    const monthlyData = new Map<string, HistoricalMetricsDto>();
    
    // Procesar colaboradores activos
    activeCollaborators.forEach(item => {
      const monthKey = item.createdAt.toISOString().slice(0, 7);
      if (!monthlyData.has(monthKey)) {
        monthlyData.set(monthKey, {
          date: new Date(item.createdAt),
          activeCollaborators: 0,
          turnoverRate: 0,
          satisfactionRate: 0
        });
      }
      monthlyData.get(monthKey)!.activeCollaborators = item._count;
    });

    // Procesar métricas de rotación
    turnoverMetrics.forEach(item => {
      const monthKey = item.createdAt.toISOString().slice(0, 7);
      if (!monthlyData.has(monthKey)) {
        monthlyData.set(monthKey, {
          date: new Date(item.createdAt),
          activeCollaborators: 0,
          turnoverRate: 0,
          satisfactionRate: 0
        });
      }
      monthlyData.get(monthKey)!.turnoverRate = (item.marketMetrics as any).value;
    });

    // Procesar métricas de satisfacción
    satisfactionMetrics.forEach(item => {
      const monthKey = item.createdAt.toISOString().slice(0, 7);
      if (!monthlyData.has(monthKey)) {
        monthlyData.set(monthKey, {
          date: new Date(item.createdAt),
          activeCollaborators: 0,
          turnoverRate: 0,
          satisfactionRate: 0
        });
      }
      monthlyData.get(monthKey)!.satisfactionRate = (item.marketMetrics as any).value;
    });

    return Array.from(monthlyData.values())
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }
} 