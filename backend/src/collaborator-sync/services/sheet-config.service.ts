import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateSheetConfigDto } from '../dto/create-sheet-config.dto';
import { UpdateSheetConfigDto } from '../dto/update-sheet-config.dto';

@Injectable()
export class SheetConfigService {
  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, createSheetConfigDto: CreateSheetConfigDto) {
    const { spreadsheetId, sheetName, range, updateFrequency } = createSheetConfigDto;
    
    if (!spreadsheetId || !sheetName || !range || !updateFrequency) {
      throw new Error('Todos los campos son requeridos');
    }

    return this.prisma.sheetConfig.create({
      data: {
        spreadsheetId,
        sheetName,
        range,
        updateFrequency,
        tenantId,
      },
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.sheetConfig.findMany({
      where: { tenantId },
    });
  }

  async findOne(tenantId: string, id: string) {
    const config = await this.prisma.sheetConfig.findFirst({
      where: {
        AND: [
          { id },
          { tenantId }
        ]
      },
    });

    if (!config) {
      throw new NotFoundException('Configuración no encontrada');
    }

    return config;
  }

  async update(tenantId: string, id: string, updateSheetConfigDto: UpdateSheetConfigDto) {
    const config = await this.findOne(tenantId, id);

    return this.prisma.sheetConfig.update({
      where: { id: config.id },
      data: updateSheetConfigDto,
    });
  }

  async remove(tenantId: string, id: string) {
    const config = await this.findOne(tenantId, id);

    return this.prisma.sheetConfig.delete({
      where: { id: config.id }
    });
  }

  async findBySpreadsheetId(tenantId: string, spreadsheetId: string) {
    const config = await this.prisma.sheetConfig.findFirst({
      where: {
        AND: [
          { tenantId },
          { spreadsheetId }
        ]
      },
    });

    if (!config) {
      throw new NotFoundException('Configuración no encontrada');
    }

    return config;
  }

  async updateLastSyncDate(tenantId: string, id: string) {
    const config = await this.findOne(tenantId, id);

    return this.prisma.sheetConfig.update({
      where: { id: config.id },
      data: {
        lastSyncDate: new Date(),
      },
    });
  }
} 