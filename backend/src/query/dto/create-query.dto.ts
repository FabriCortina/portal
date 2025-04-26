import { IsDate, IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateQueryDto {
  @ApiProperty({ example: '2024-01-01', description: 'Fecha de la consulta' })
  @IsDate()
  @Type(() => Date)
  date: Date;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID del colaborador' })
  @IsString()
  @IsNotEmpty()
  collaboratorId: string;

  @ApiProperty({ example: 'Técnico', description: 'Tipo de consulta' })
  @IsString()
  @IsNotEmpty()
  topicType: string;

  @ApiProperty({ example: 'Problema con el servidor de desarrollo', description: 'Descripción del problema' })
  @IsString()
  @IsNotEmpty()
  problemDescription: string;

  @ApiProperty({ example: 'Juan Pérez', description: 'Persona que resolverá la consulta' })
  @IsString()
  @IsNotEmpty()
  resolver: string;

  @ApiProperty({ example: '2024-01-02', description: 'Fecha de resolución', required: false })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  resolutionDate?: Date;

  @ApiProperty({ example: 'archivo1.pdf,archivo2.jpg', description: 'Archivos adjuntos', required: false })
  @IsString()
  @IsOptional()
  attachments?: string;
} 