import { IsString, IsNotEmpty, IsOptional, IsNumber, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

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
  @IsObject()
  @IsOptional()
  @Type(() => Object)
  marketMetrics?: Record<string, any>;

  @ApiProperty({ 
    example: '550e8400-e29b-41d4-a716-446655440000', 
    description: 'ID del cliente relacionado',
    required: false
  })
  @IsString()
  @IsOptional()
  clientId?: string;

  @ApiProperty({ 
    example: '550e8400-e29b-41d4-a716-446655440000', 
    description: 'ID del tenant al que pertenece la métrica'
  })
  @IsString()
  @IsNotEmpty()
  tenantId: string;
} 