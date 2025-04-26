import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';
import { GoogleSheetsPort } from '../../domain/ports/google-sheets.port';
import { Injectable, Logger } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class GoogleSheetsAdapter implements GoogleSheetsPort {
  private sheets: any;
  private readonly logger = new Logger(GoogleSheetsAdapter.name);

  constructor() {
    this.sheets = google.sheets('v4');
  }

  async authorize(): Promise<void> {
    try {
      const auth = await authenticate({
        keyfilePath: path.join(process.cwd(), 'credentials.json'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
      });

      google.options({ auth });
    } catch (error) {
      this.logger.error('Error al autorizar con Google Sheets:', error);
      throw new Error('Error de autorización con Google Sheets');
    }
  }

  async readSheet(sheetId: string, range: string): Promise<any[][]> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range,
      });

      return response.data.values;
    } catch (error) {
      this.logger.error('Error al leer la hoja de cálculo:', error);
      throw new Error('Error al leer la hoja de cálculo');
    }
  }
} 