import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
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
  @IsEnum(['hourly', 'daily', 'weekly', 'monthly'])
  @IsNotEmpty()
  updateFrequency: string;

  @ApiProperty({ 
    example: '2024-04-27T00:00:00Z', 
    description: 'Fecha de última sincronización',
    required: false
  })
  @IsString()
  @IsOptional()
  lastSyncDate?: string;
}

export class ColumnMappingDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dni: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  client: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  project: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  role?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  province?: string;
} 