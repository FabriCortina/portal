import { ApiProperty } from '@nestjs/swagger';

export class RoleDistributionDto {
  @ApiProperty()
  role: string;

  @ApiProperty()
  count: number;

  @ApiProperty()
  percentage: number;
}

export class ProvinceDistributionDto {
  @ApiProperty()
  province: string;

  @ApiProperty()
  count: number;

  @ApiProperty()
  percentage: number;
}

export class HistoricalMetricsDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  activeCollaborators: number;

  @ApiProperty()
  turnoverRate: number;

  @ApiProperty()
  satisfactionRate: number;
}

export class DashboardMetricsDto {
  @ApiProperty()
  totalActiveCollaborators: number;

  @ApiProperty()
  averageTurnoverRate: number;

  @ApiProperty()
  averageSatisfactionRate: number;

  @ApiProperty({ type: [RoleDistributionDto] })
  roleDistribution: RoleDistributionDto[];

  @ApiProperty({ type: [ProvinceDistributionDto] })
  provinceDistribution: ProvinceDistributionDto[];

  @ApiProperty({ type: [HistoricalMetricsDto] })
  historicalMetrics: HistoricalMetricsDto[];
} 