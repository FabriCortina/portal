import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SheetConfigDto {
  @ApiProperty({ 
    example: '1BxiM0hXyjaX_6Q5vFmK5JvH5dLbwJz1k', 
    description: 'ID de la hoja de cálculo de Google Sheets' 
  })
  @IsString()
  @IsNotEmpty()
  spreadsheetId: string;

  @ApiProperty({ 
    example: 'Colaboradores', 
    description: 'Nombre de la hoja dentro del documento' 
  })
  @IsString()
  @IsNotEmpty()
  sheetName: string;

  @ApiProperty({ 
    example: 'A2:F', 
    description: 'Rango de celdas a sincronizar' 
  })
  @IsString()
  @IsNotEmpty()
  range: string;

  @ApiProperty({ 
    example: 'daily', 
    description: 'Frecuencia de actualización',
    enum: ['hourly', 'daily', 'weekly', 'monthly']
  })
  @IsString()
  @IsNotEmpty()
  updateFrequency: string;

  @ApiProperty({ 
    example: '2024-04-27T00:00:00Z', 
    description: 'Fecha de última sincronización',
    required: false
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  lastSyncDate?: Date;
} 