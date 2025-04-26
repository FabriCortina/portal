import { IsString, IsNumber, Min, Max, IsUUID } from 'class-validator';
import { SheetConfig } from '../../domain/ports/google-sheets.port';

export class SheetConfigDto implements SheetConfig {
  @IsString()
  sheetId: string;

  @IsString()
  range: string;

  @IsNumber()
  @Min(1)
  @Max(24)
  updateFrequency: number;

  @IsUUID()
  tenantId: string;
} 