import { Injectable, Logger } from '@nestjs/common';
import { CollaboratorSyncService } from '../../domain/services/collaborator-sync.service';
import { SheetConfig } from '../../domain/ports/google-sheets.port';
import { PrismaService } from '@/prisma/prisma.service';
import * as cron from 'node-cron';

@Injectable()
export class ScheduleCollaboratorSyncUseCase {
  private readonly logger = new Logger(ScheduleCollaboratorSyncUseCase.name);
  private syncJobs: Map<string, cron.ScheduledTask> = new Map();

  constructor(
    private readonly syncService: CollaboratorSyncService,
    private readonly prisma: PrismaService,
  ) {}

  async schedule(config: SheetConfig): Promise<void> {
    // Guardar o actualizar la configuración en la base de datos
    await this.prisma.sheetConfig.upsert({
      where: {
        tenantId: config.tenantId,
      },
      update: {
        spreadsheetId: config.spreadsheetId,
        sheetName: config.sheetName,
        range: config.range,
        updateFrequency: config.updateFrequency,
        lastSyncDate: new Date(),
      },
      create: {
        tenantId: config.tenantId,
        spreadsheetId: config.spreadsheetId,
        sheetName: config.sheetName,
        range: config.range,
        updateFrequency: config.updateFrequency,
        lastSyncDate: new Date(),
      },
    });

    // Cancelar el trabajo existente si existe
    const existingJob = this.syncJobs.get(config.tenantId);
    if (existingJob) {
      existingJob.stop();
      this.syncJobs.delete(config.tenantId);
    }

    // Programar nuevo trabajo
    const cronExpression = this.getCronExpression(config.updateFrequency);
    const job = cron.schedule(cronExpression, async () => {
      try {
        await this.syncService.syncCollaborators(config);
        this.logger.log(`Sincronización completada para tenant ${config.tenantId}`);
      } catch (error) {
        this.logger.error(`Error en la sincronización para tenant ${config.tenantId}:`, error);
      }
    });

    this.syncJobs.set(config.tenantId, job);
    this.logger.log(`Sincronización programada para tenant ${config.tenantId} con frecuencia ${config.updateFrequency}`);

    // Ejecutar sincronización inicial
    try {
      await this.syncService.syncCollaborators(config);
      this.logger.log(`Sincronización inicial completada para tenant ${config.tenantId}`);
    } catch (error) {
      this.logger.error(`Error en la sincronización inicial para tenant ${config.tenantId}:`, error);
    }
  }

  async forceSync(tenantId: string): Promise<void> {
    const config = await this.getConfig(tenantId);
    if (!config) {
      throw new Error('Configuración no encontrada para el tenant');
    }

    try {
      await this.syncService.syncCollaborators(config);
      this.logger.log(`Sincronización forzada completada para tenant ${tenantId}`);
    } catch (error) {
      this.logger.error(`Error en la sincronización forzada para tenant ${tenantId}:`, error);
      throw error;
    }
  }

  private async getConfig(tenantId: string): Promise<SheetConfig | null> {
    const config = await this.prisma.sheetConfig.findUnique({
      where: {
        tenantId,
      },
    });

    if (!config) {
      return null;
    }

    return {
      tenantId: config.tenantId,
      spreadsheetId: config.spreadsheetId,
      sheetName: config.sheetName,
      range: config.range,
      updateFrequency: config.updateFrequency,
    };
  }

  private getCronExpression(frequency: string): string {
    switch (frequency) {
      case 'hourly':
        return '0 * * * *'; // Cada hora
      case 'daily':
        return '0 0 * * *'; // Cada día a medianoche
      case 'weekly':
        return '0 0 * * 0'; // Cada domingo a medianoche
      case 'monthly':
        return '0 0 1 * *'; // Primer día de cada mes a medianoche
      default:
        return '0 0 * * *'; // Por defecto, diario
    }
  }
} 