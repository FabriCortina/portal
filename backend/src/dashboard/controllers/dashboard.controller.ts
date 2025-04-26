import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DashboardService } from '../services/dashboard.service';
import { DashboardMetricsDto } from '../dto/dashboard-metrics.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { TenantId } from '../../common/decorators/tenant-id.decorator';

@ApiTags('Dashboard')
@Controller('dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('metrics')
  @ApiOperation({ summary: 'Obtener métricas del dashboard' })
  @ApiResponse({
    status: 200,
    description: 'Métricas obtenidas exitosamente',
    type: DashboardMetricsDto,
  })
  async getDashboardMetrics(
    @TenantId() tenantId: string
  ): Promise<DashboardMetricsDto> {
    return this.dashboardService.getDashboardMetrics(tenantId);
  }
} 