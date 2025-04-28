import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';
import { GoogleSheetsPort, SheetConfig } from '@/domain/ports/google-sheets.port';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import * as path from 'path';

@Injectable()
export class GoogleSheetsAdapter implements GoogleSheetsPort {
  private sheets: any;
  private readonly logger = new Logger(GoogleSheetsAdapter.name);

  constructor(private readonly prisma: PrismaService) {
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

  async readSheet(spreadsheetId: string, range: string): Promise<any[][]> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

      return response.data.values;
    } catch (error) {
      this.logger.error('Error al leer la hoja de cálculo:', error);
      throw new Error('Error al leer la hoja de cálculo');
    }
  }

  async syncCollaborators(config: SheetConfig): Promise<void> {
    try {
      const data = await this.readSheet(config.spreadsheetId, config.range);

      // Actualizar o crear colaboradores
      for (const row of data) {
        const [name, role, dni, cuit, sooftEmail, personalEmail] = row;
        await this.prisma.collaborator.upsert({
          where: {
            tenantId_name: {
              tenantId: config.tenantId,
              name
            }
          },
          create: {
            tenantId: config.tenantId,
            name,
            role,
            dni,
            cuit,
            sooftEmail,
            personalEmail,
            isActive: true,
          },
          update: {
            role,
            dni,
            cuit,
            sooftEmail,
            personalEmail,
            isActive: true
          }
        });
      }

      // Actualizar la configuración de la hoja
      await this.prisma.sheetConfig.upsert({
        where: {
          tenantId: config.tenantId
        },
        create: {
          tenantId: config.tenantId,
          spreadsheetId: config.spreadsheetId,
          sheetName: config.sheetName,
          range: config.range,
          updateFrequency: config.updateFrequency,
          lastSyncDate: new Date()
        },
        update: {
          spreadsheetId: config.spreadsheetId,
          sheetName: config.sheetName,
          range: config.range,
          updateFrequency: config.updateFrequency,
          lastSyncDate: new Date()
        }
      });
    } catch (error) {
      this.logger.error('Error al sincronizar colaboradores:', error);
      throw new Error('Error al sincronizar colaboradores');
    }
  }
} 