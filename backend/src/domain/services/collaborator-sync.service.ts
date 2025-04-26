import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { GoogleSheetsPort, SheetConfig } from '../ports/google-sheets.port';
import { Collaborator } from '@prisma/client';

@Injectable()
export class CollaboratorSyncService {
  private readonly logger = new Logger(CollaboratorSyncService.name);

  constructor(
    private readonly googleSheets: GoogleSheetsPort,
    private readonly prisma: PrismaService,
  ) {}

  async syncCollaborators(config: SheetConfig): Promise<void> {
    try {
      await this.googleSheets.authorize();
      const data = await this.googleSheets.readSheet(config.sheetId, config.range);

      // La primera fila contiene los nombres de los campos
      const headers = data[0];
      
      // Omitir la primera fila (encabezados) y procesar el resto
      const rows = data.slice(1);

      for (const row of rows) {
        try {
          await this.processCollaboratorRow(row, headers, config.tenantId);
        } catch (error) {
          this.logger.warn(`Error procesando fila: ${error.message}`, {
            row,
            error,
          });
          // Continuar con la siguiente fila
          continue;
        }
      }
    } catch (error) {
      this.logger.error('Error en la sincronización:', error);
      throw new Error('Error en la sincronización de colaboradores');
    }
  }

  private async processCollaboratorRow(row: any[], headers: string[], tenantId: string): Promise<void> {
    // Crear un objeto con los datos mapeados usando los encabezados
    const collaboratorData: Partial<Collaborator> = {
      tenantId,
    };

    // Mapear cada columna a su campo correspondiente usando los encabezados
    headers.forEach((header, index) => {
      const value = row[index];
      if (value !== undefined && value !== null && value !== '') {
        // Convertir los campos según su tipo
        switch (header) {
          case 'firstContractDate':
          case 'secondContractDate':
          case 'contractEndDate':
          case 'terminationDate':
          case 'birthDate':
          case 'spouseBirthDate':
          case 'child1BirthDate':
          case 'child2BirthDate':
          case 'child3BirthDate':
          case 'child4BirthDate':
          case 'child5BirthDate':
            collaboratorData[header] = new Date(value);
            break;
          case 'seniority':
          case 'age':
          case 'child1Age':
          case 'child2Age':
          case 'child3Age':
          case 'child4Age':
          case 'child5Age':
          case 'dependents':
            collaboratorData[header] = parseInt(value);
            break;
          case 'hasChildren':
          case 'hasDisability':
          case 'hasFoodRestriction':
            collaboratorData[header] = value === 'SI';
            break;
          default:
            collaboratorData[header] = value;
        }
      }
    });

    try {
      await this.prisma.collaborator.upsert({
        where: {
          dni_tenantId: {
            dni: collaboratorData.dni,
            tenantId,
          },
        },
        update: collaboratorData,
        create: collaboratorData as Collaborator,
      });
    } catch (error) {
      this.logger.warn(`Error al procesar colaborador ${collaboratorData.dni}:`, error);
      throw error;
    }
  }
} 