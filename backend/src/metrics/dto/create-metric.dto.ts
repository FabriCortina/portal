import { IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMetricDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID del cliente' })
  @IsString()
  @IsNotEmpty()
  clientId: string;

  @ApiProperty({ example: 15.5, description: 'Promedio de rotación de personal' })
  @IsNumber()
  @Min(0)
  @Max(100)
  averageRotation: number;

  @ApiProperty({ example: 8.5, description: 'Promedio de satisfacción (1-10)' })
  @IsNumber()
  @Min(1)
  @Max(10)
  averageSatisfaction: number;

  @ApiProperty({ example: 92.5, description: 'Porcentaje de sprints completados' })
  @IsNumber()
  @Min(0)
  @Max(100)
  completedSprintsPercentage: number;

  @ApiProperty({ example: 2.5, description: 'Promedio de bugs por sprint' })
  @IsNumber()
  @Min(0)
  averageBugs: number;

  @ApiProperty({ example: '{"marketShare": 25, "competitors": 3}', description: 'Métricas de mercado en formato JSON' })
  @IsString()
  @IsNotEmpty()
  marketMetrics: string;
} 