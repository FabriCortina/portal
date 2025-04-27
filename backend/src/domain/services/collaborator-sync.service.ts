import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { GoogleSheetsAdapter } from '@/infrastructure/adapters/google-sheets.adapter';

@Injectable()
export class CollaboratorSyncService {
  private readonly logger = new Logger(CollaboratorSyncService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly googleSheets: GoogleSheetsAdapter,
  ) {}

  async syncCollaborators(tenantId: string): Promise<void> {
    try {
      const sheetConfig = await this.prisma.sheetConfig.findUnique({
        where: { tenantId }
      });

      if (!sheetConfig) {
        throw new Error('No se encontró la configuración de la hoja de cálculo');
      }

      const data = await this.googleSheets.readSheet(
        sheetConfig.spreadsheetId,
        sheetConfig.range
      );

      await this.googleSheets.syncCollaborators(
        tenantId,
        sheetConfig.spreadsheetId,
        data
      );

      this.logger.log(`Sincronización completada para el tenant ${tenantId}`);
    } catch (error) {
      this.logger.error(`Error al sincronizar colaboradores: ${error.message}`);
      throw error;
    }
  }

  async scheduleSync(tenantId: string): Promise<void> {
    try {
      const sheetConfig = await this.prisma.sheetConfig.findUnique({
        where: { tenantId }
      });

      if (!sheetConfig) {
        throw new Error('No se encontró la configuración de la hoja de cálculo');
      }

      // Aquí iría la lógica de programación de tareas
      // Por ejemplo, usando node-cron o similar
      this.logger.log(`Sincronización programada para el tenant ${tenantId}`);
    } catch (error) {
      this.logger.error(`Error al programar sincronización: ${error.message}`);
      throw error;
    }
  }
} 