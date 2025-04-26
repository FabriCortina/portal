export interface GoogleSheetsPort {
  readSheet(sheetId: string, range: string): Promise<any[][]>;
  authorize(): Promise<void>;
}

export interface SheetConfig {
  sheetId: string;
  range: string;
  updateFrequency: number; // en horas
  tenantId: string;
} 