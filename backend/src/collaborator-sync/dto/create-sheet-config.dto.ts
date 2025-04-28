import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSheetConfigDto {
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
} 