import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';

@Injectable()
export class MetricsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, createMetricDto: CreateMetricDto) {
    const { type, value, marketMetrics, clientId } = createMetricDto;

    return this.prisma.metric.create({
      data: {
        type,
        value,
        marketMetrics: marketMetrics || null,
        clientId,
        tenantId
      },
      include: {
        client: true
      }
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.metric.findMany({
      where: { tenantId },
      include: {
        client: true
      }
    });
  }

  async findOne(tenantId: string, id: string) {
    const metric = await this.prisma.metric.findFirst({
      where: {
        AND: [
          { id },
          { tenantId }
        ]
      },
      include: {
        client: true
      }
    });

    if (!metric) {
      throw new NotFoundException('Métrica no encontrada');
    }

    return metric;
  }

  async update(tenantId: string, id: string, updateMetricDto: UpdateMetricDto) {
    const metric = await this.findOne(tenantId, id);

    return this.prisma.metric.update({
      where: { id: metric.id },
      data: {
        ...updateMetricDto,
        marketMetrics: updateMetricDto.marketMetrics || null
      },
      include: {
        client: true
      }
    });
  }

  async remove(tenantId: string, id: string) {
    const metric = await this.findOne(tenantId, id);

    return this.prisma.metric.delete({
      where: { id: metric.id }
    });
  }

  async findByClient(tenantId: string, clientId: string) {
    return this.prisma.metric.findMany({
      where: {
        AND: [
          { tenantId },
          { clientId }
        ]
      },
      include: {
        client: true
      }
    });
  }

  async findByType(tenantId: string, type: string) {
    return this.prisma.metric.findMany({
      where: {
        AND: [
          { tenantId },
          { type }
        ]
      },
      include: {
        client: true
      }
    });
  }

  async getMarketMetrics(tenantId: string) {
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
        marketMetrics: true
      }
    });

    return metrics.map(metric => ({
      type: metric.type,
      value: metric.value,
      marketMetrics: metric.marketMetrics as Record<string, any> || null
    }));
  }
} 