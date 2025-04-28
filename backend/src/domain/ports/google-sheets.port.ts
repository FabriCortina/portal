export interface GoogleSheetsPort {
  readSheet(spreadsheetId: string, range: string): Promise<any[][]>;
  syncCollaborators(config: SheetConfig): Promise<void>;
}

export interface SheetConfig {
  tenantId: string;
  spreadsheetId: string;
  sheetName: string;
  range: string;
  updateFrequency: string;
} 