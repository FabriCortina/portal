import { IsDate, IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateTrackingDto {
  @ApiProperty({ example: '2024-01-01', description: 'Fecha del tracking' })
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID del colaborador' })
  @IsString()
  @IsNotEmpty()
  collaboratorId: string;

  @ApiProperty({ example: 85.5, description: 'Porcentaje de completitud del sprint' })
  @IsNumber()
  @Min(0)
  @Max(100)
  sprintPercentage: number;

  @ApiProperty({ example: 3, description: 'Cantidad de bugs encontrados' })
  @IsNumber()
  @Min(0)
  bugsCount: number;

  @ApiProperty({ example: 'Buen rendimiento en el sprint', description: 'Feedback del sprint' })
  @IsString()
  @IsNotEmpty()
  feedback: string;

  @ApiProperty({ example: 8, description: 'Satisfacción en los últimos 15 días (1-10)' })
  @IsNumber()
  @Min(1)
  @Max(10)
  last15DaysSatisfaction: number;

  @ApiProperty({ example: 'Resolver problemas de rendimiento', description: 'Problemas a resolver' })
  @IsString()
  @IsNotEmpty()
  issuesToResolve: string;
} 