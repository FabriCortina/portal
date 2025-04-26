import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SheetConfigDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  spreadsheetId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sheetName: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  syncInterval?: number; // en minutos

  @ApiProperty()
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