import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
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
        isActive: true,
        deletedAt: null
      }
    });
  }

  private async getRoleDistribution(tenantId: string): Promise<RoleDistributionDto[]> {
    const collaborators = await this.prisma.collaborator.groupBy({
      by: ['role'],
      where: {
        tenantId,
        isActive: true,
        deletedAt: null
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
        isActive: true,
        deletedAt: null
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
        type: 'TURNOVER_RATE',
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 12)) // Últimos 12 meses
        }
      },
      select: {
        value: true
      }
    });

    if (!turnoverMetrics.length) return 0;
    return turnoverMetrics.reduce((sum, metric) => sum + metric.value, 0) / turnoverMetrics.length;
  }

  private async getAverageSatisfactionRate(tenantId: string): Promise<number> {
    const satisfactionMetrics = await this.prisma.metric.findMany({
      where: {
        tenantId,
        type: 'SATISFACTION_RATE',
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 12)) // Últimos 12 meses
        }
      },
      select: {
        value: true
      }
    });

    if (!satisfactionMetrics.length) return 0;
    return satisfactionMetrics.reduce((sum, metric) => sum + metric.value, 0) / satisfactionMetrics.length;
  }

  private async getHistoricalMetrics(tenantId: string): Promise<HistoricalMetricsDto[]> {
    const startDate = new Date(new Date().setMonth(new Date().getMonth() - 12));
    
    const historicalData = await this.prisma.$transaction([
      // Colaboradores activos por mes
      this.prisma.collaborator.groupBy({
        by: ['createdAt'],
        where: {
          tenantId,
          createdAt: { gte: startDate },
          isActive: true,
          deletedAt: null
        },
        _count: true
      }),
      // Métricas de rotación
      this.prisma.metric.findMany({
        where: {
          tenantId,
          type: 'TURNOVER_RATE',
          createdAt: { gte: startDate }
        },
        select: {
          value: true,
          createdAt: true
        }
      }),
      // Métricas de satisfacción
      this.prisma.metric.findMany({
        where: {
          tenantId,
          type: 'SATISFACTION_RATE',
          createdAt: { gte: startDate }
        },
        select: {
          value: true,
          createdAt: true
        }
      })
    ]);

    // Agrupar por mes
    const monthlyData = new Map<string, HistoricalMetricsDto>();
    
    // Procesar cada conjunto de datos
    historicalData.forEach((dataset, index) => {
      dataset.forEach(item => {
        const monthKey = item.createdAt.toISOString().slice(0, 7);
        if (!monthlyData.has(monthKey)) {
          monthlyData.set(monthKey, {
            date: new Date(item.createdAt),
            activeCollaborators: 0,
            turnoverRate: 0,
            satisfactionRate: 0
          });
        }
        
        const entry = monthlyData.get(monthKey)!;
        switch (index) {
          case 0: // Colaboradores activos
            entry.activeCollaborators = (item as any)._count;
            break;
          case 1: // Rotación
            entry.turnoverRate = item.value;
            break;
          case 2: // Satisfacción
            entry.satisfactionRate = item.value;
            break;
        }
      });
    });

    return Array.from(monthlyData.values())
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }
} 