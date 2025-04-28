import { PrismaService } from '@/infrastructure/services/prisma.service'; // O el path correcto a PrismaService
import { SheetConfigDto } from '@/application/sheet-config/dto/sheet-config.dto'; // Ajustá el import si la ruta es diferente

export class SheetConfigService {
  constructor(private readonly prisma: PrismaService) {}

  async createSheetConfig(tenantId: string, data: SheetConfigDto) {
    return this.prisma.sheetConfig.create({
      data: {
        tenantId,
        spreadsheetId: data.spreadsheetId,
        sheetName: data.sheetName,
        range: data.range,
        updateFrequency: data.updateFrequency,
        lastSyncDate: data.lastSyncDate || null
      }
    });
  }

  async updateSheetConfig(tenantId: string, id: string, data: SheetConfigDto) {
    return this.prisma.sheetConfig.update({
      where: {
        id,
        tenantId
      },
      data: {
        spreadsheetId: data.spreadsheetId,
        sheetName: data.sheetName,
        range: data.range,
        updateFrequency: data.updateFrequency,
        lastSyncDate: data.lastSyncDate || null
      }
    });
  }
}
