import { Injectable, Logger } from '@nestjs/common';
import { GoogleSheetsService } from '../../collaborator-sync/services/google-sheets.service';
import { PrismaService } from '@/prisma/prisma.service';
import { SheetConfig } from '../ports/google-sheets.port';

@Injectable()
export class CollaboratorSyncService {
  private readonly logger = new Logger(CollaboratorSyncService.name);

  constructor(
    private readonly googleSheetsService: GoogleSheetsService,
    private readonly prisma: PrismaService,
  ) {}

  async syncCollaborators(config: SheetConfig) {
    try {
      const data = await this.googleSheetsService.readSheet(config);
      const collaborators = this.processSheetData(data);

      for (const collaborator of collaborators) {
        await this.createOrUpdateCollaborator(config.tenantId, collaborator);
      }

      await this.updateLastSyncDate(config.tenantId, config.id);
    } catch (error) {
      this.logger.error(`Error syncing collaborators: ${error.message}`);
      throw error;
    }
  }

  private async createOrUpdateCollaborator(tenantId: string, data: any) {
    const { name, role, dni, cuit, sooftEmail, personalEmail, clientId } = data;

    // Buscar colaborador existente por nombre y tenantId
    const existingCollaborator = await this.prisma.collaborator.findFirst({
      where: {
        AND: [
          { tenantId },
          { name }
        ]
      }
    });

    if (existingCollaborator) {
      // Actualizar colaborador existente
      return this.prisma.collaborator.update({
        where: { id: existingCollaborator.id },
        data: {
          role,
          sooftEmail,
          personalEmail,
          clientId,
          updatedAt: new Date(),
          metadata: {
            dni,
            cuit
          }
        }
      });
    } else {
      // Crear nuevo colaborador
      return this.prisma.collaborator.create({
        data: {
          name,
          role,
          sooftEmail,
          personalEmail,
          clientId,
          tenantId,
          isActive: true,
          metadata: {
            dni,
            cuit
          }
        }
      });
    }
  }

  private async updateLastSyncDate(tenantId: string, configId: string) {
    return this.prisma.sheetConfig.update({
      where: { id: configId },
      data: {
        lastSyncDate: new Date()
      }
    });
  }

  private processSheetData(data: any[][]): any[] {
    // Implementar lógica de procesamiento de datos de la hoja
    // Este método debe convertir los datos de la hoja en objetos de colaborador
    return [];
  }

  async getCollaboratorsByTenant(tenantId: string) {
    return this.prisma.collaborator.findMany({
      where: {
        tenantId,
        isActive: true,
      },
      include: {
        client: true,
      },
    });
  }

  async getCollaboratorByDni(tenantId: string, dni: string) {
    return this.prisma.collaborator.findFirst({
      where: {
        tenantId,
        dni,
        isActive: true,
      },
      include: {
        client: true,
      },
    });
  }

  async updateCollaborator(tenantId: string, name: string, data: any) {
    const { dni, cuit, ...restData } = data;
    return this.prisma.collaborator.update({
      where: {
        tenantId_name: {
          tenantId,
          name,
        },
      },
      data: {
        ...restData,
        updatedAt: new Date(),
        metadata: {
          dni,
          cuit
        }
      },
    });
  }
} 