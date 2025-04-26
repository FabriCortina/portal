import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GoogleSheetsService } from '../services/google-sheets.service';
import { SheetConfigDto, ColumnMappingDto } from '../dto/sheet-config.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@ApiTags('Collaborator Sync')
@Controller('collaborator-sync')
@UseGuards(JwtAuthGuard)
export class CollaboratorSyncController {
  constructor(private readonly googleSheetsService: GoogleSheetsService) {}

  @Post('sync')
  @ApiOperation({ summary: 'Sincronizar colaboradores desde Google Sheets' })
  @ApiResponse({
    status: 200,
    description: 'Sincronización completada exitosamente',
  })
  async syncCollaborators(
    @Body() config: SheetConfigDto,
    @Body() columnMapping: ColumnMappingDto,
  ): Promise<void> {
    await this.googleSheetsService.syncCollaborators(config, columnMapping);
  }

  @Get('config')
  @ApiOperation({ summary: 'Obtener configuración actual' })
  @ApiResponse({
    status: 200,
    description: 'Configuración obtenida exitosamente',
    type: SheetConfigDto,
  })
  async getConfig(): Promise<SheetConfigDto> {
    // Implementar lógica para obtener configuración actual
    return {
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      sheetName: process.env.GOOGLE_SHEET_NAME,
      syncInterval: parseInt(process.env.SYNC_INTERVAL, 10),
    };
  }
} 