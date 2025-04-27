import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';
import { GoogleSheetsPort } from '../../domain/ports/google-sheets.port';
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

  async syncCollaborators(tenantId: string, spreadsheetId: string, data: any[][]): Promise<void> {
    try {
      // Actualizar o crear colaboradores
      for (const row of data) {
        const [name, role, dni, cuit, sooftEmail, personalEmail] = row;
        await this.prisma.collaborator.upsert({
          where: {
            tenantId_name: {
              tenantId,
              name
            }
          },
          create: {
            name,
            role,
            dni,
            cuit,
            sooftEmail,
            personalEmail,
            isActive: true,
            tenantId
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
          tenantId
        },
        create: {
          tenantId,
          spreadsheetId,
          sheetName: 'Colaboradores',
          range: 'A2:F',
          updateFrequency: 'daily',
          lastSyncDate: new Date()
        },
        update: {
          spreadsheetId,
          lastSyncDate: new Date()
        }
      });
    } catch (error) {
      this.logger.error('Error al sincronizar colaboradores:', error);
      throw new Error('Error al sincronizar colaboradores');
    }
  }
} 