import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google } from 'googleapis';
import { SheetConfigDto, ColumnMappingDto } from '../dto/sheet-config.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class GoogleSheetsService {
  private readonly logger = new Logger(GoogleSheetsService.name);
  private readonly sheets;

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(
        this.configService.get<string>('GOOGLE_SERVICE_ACCOUNT_CREDENTIALS'),
      ),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async readSheetData(config: SheetConfigDto): Promise<any[]> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: config.spreadsheetId,
        range: `${config.sheetName}!A:Z`,
      });

      return response.data.values || [];
    } catch (error) {
      this.logger.error(`Error reading sheet data: ${error.message}`);
      throw new Error('Error al leer datos de la hoja de cálculo');
    }
  }

  async syncCollaborators(
    config: SheetConfigDto,
    columnMapping: ColumnMappingDto,
  ): Promise<void> {
    try {
      const rows = await this.readSheetData(config);
      if (!rows.length) {
        this.logger.warn('No se encontraron datos en la hoja');
        return;
      }

      // Obtener índices de columnas
      const headerRow = rows[0];
      const columnIndices = this.getColumnIndices(headerRow, columnMapping);

      // Procesar filas
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const collaboratorData = this.mapRowToCollaborator(row, columnIndices);

        if (collaboratorData) {
          await this.upsertCollaborator(collaboratorData);
        }
      }

      // Actualizar última sincronización
      await this.updateLastSyncDate(config);
    } catch (error) {
      this.logger.error(`Error syncing collaborators: ${error.message}`);
      throw new Error('Error al sincronizar colaboradores');
    }
  }

  private getColumnIndices(
    headerRow: string[],
    mapping: ColumnMappingDto,
  ): Record<string, number> {
    const indices: Record<string, number> = {};
    
    Object.entries(mapping).forEach(([key, value]) => {
      const index = headerRow.findIndex(
        (header) => header.toLowerCase() === value.toLowerCase(),
      );
      if (index !== -1) {
        indices[key] = index;
      }
    });

    return indices;
  }

  private mapRowToCollaborator(
    row: string[],
    indices: Record<string, number>,
  ): any {
    try {
      return {
        dni: row[indices.dni]?.trim(),
        name: row[indices.name]?.trim(),
        status: row[indices.status]?.trim(),
        client: row[indices.client]?.trim(),
        project: row[indices.project]?.trim(),
        role: row[indices.role]?.trim(),
        province: row[indices.province]?.trim(),
      };
    } catch (error) {
      this.logger.error(`Error mapping row: ${error.message}`);
      return null;
    }
  }

  private async upsertCollaborator(data: any): Promise<void> {
    try {
      await this.prisma.collaborator.upsert({
        where: { dni: data.dni },
        update: {
          name: data.name,
          status: data.status,
          client: data.client,
          project: data.project,
          role: data.role,
          province: data.province,
          updatedAt: new Date(),
        },
        create: {
          dni: data.dni,
          name: data.name,
          status: data.status,
          client: data.client,
          project: data.project,
          role: data.role,
          province: data.province,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      this.logger.error(`Error upserting collaborator: ${error.message}`);
      throw new Error('Error al actualizar colaborador');
    }
  }

  private async updateLastSyncDate(config: SheetConfigDto): Promise<void> {
    try {
      await this.prisma.sheetConfig.upsert({
        where: { spreadsheetId: config.spreadsheetId },
        update: {
          lastSyncDate: new Date().toISOString(),
        },
        create: {
          spreadsheetId: config.spreadsheetId,
          sheetName: config.sheetName,
          syncInterval: config.syncInterval,
          lastSyncDate: new Date().toISOString(),
        },
      });
    } catch (error) {
      this.logger.error(`Error updating last sync date: ${error.message}`);
      throw new Error('Error al actualizar fecha de última sincronización');
    }
  }
} 