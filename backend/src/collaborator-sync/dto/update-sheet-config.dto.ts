import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSheetConfigDto {
  @ApiProperty({ 
    example: '1BxiM0hXyjaX_6Q5vFmK5JvH5dLbwJz1k', 
    description: 'ID de la hoja de cálculo de Google Sheets',
    required: false
  })
  @IsString()
  @IsOptional()
  spreadsheetId?: string;

  @ApiProperty({ 
    example: 'Colaboradores', 
    description: 'Nombre de la hoja dentro del documento',
    required: false
  })
  @IsString()
  @IsOptional()
  sheetName?: string;

  @ApiProperty({ 
    example: 'A2:F', 
    description: 'Rango de celdas a sincronizar',
    required: false
  })
  @IsString()
  @IsOptional()
  range?: string;

  @ApiProperty({ 
    example: 'daily', 
    description: 'Frecuencia de actualización',
    enum: ['hourly', 'daily', 'weekly', 'monthly'],
    required: false
  })
  @IsEnum(['hourly', 'daily', 'weekly', 'monthly'])
  @IsOptional()
  updateFrequency?: string;
} 