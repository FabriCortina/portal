import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMetricDto {
  @ApiProperty({ 
    example: 'satisfaction', 
    description: 'Tipo de métrica',
    required: false
  })
  @IsString()
  @IsOptional()
  type?: string;

  @ApiProperty({ 
    example: 85.5, 
    description: 'Valor de la métrica',
    required: false
  })
  @IsNumber()
  @IsOptional()
  value?: number;

  @ApiProperty({ 
    example: { marketAverage: 80, marketMax: 90, marketMin: 70 }, 
    description: 'Métricas de mercado relacionadas',
    required: false
  })
  @IsOptional()
  marketMetrics?: Record<string, any>;

  @ApiProperty({ 
    example: 'client-123', 
    description: 'ID del cliente relacionado',
    required: false
  })
  @IsString()
  @IsOptional()
  clientId?: string;
} 