import { IsString, IsNumber, IsNotEmpty, IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateMetricDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID del cliente', required: false })
  @IsString()
  @IsOptional()
  clientId?: string;

  @ApiProperty({ example: 'market_share', description: 'Tipo de métrica' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 25.5, description: 'Valor de la métrica' })
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @ApiProperty({ 
    example: { marketShare: 25, competitors: 3 }, 
    description: 'Métricas de mercado en formato JSON',
    required: false 
  })
  @IsObject()
  @IsOptional()
  @Type(() => Object)
  marketMetrics?: Record<string, any>;
} 