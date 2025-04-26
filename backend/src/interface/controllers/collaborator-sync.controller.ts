import { Controller, Post, Body, UseGuards, Req, Put, Param, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/enums/role.enum';
import { ScheduleCollaboratorSyncUseCase } from '../../application/use-cases/schedule-collaborator-sync.use-case';
import { SheetConfig } from '../../domain/ports/google-sheets.port';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';

@Controller('collaborator-sync')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CollaboratorSyncController {
  constructor(
    private readonly scheduleUseCase: ScheduleCollaboratorSyncUseCase,
    private readonly prisma: PrismaService,
  ) {}

  @Post('configure')
  @Roles(Role.ADMIN)
  async configureSync(
    @Body() config: SheetConfig,
    @Req() req: any,
  ): Promise<void> {
    // Asegurarse de que el tenant coincida con el del usuario
    if (req.user.tenantId !== config.tenantId) {
      throw new Error('No autorizado para configurar sincronización para este tenant');
    }

    await this.scheduleUseCase.schedule(config);
  }

  @Put(':tenantId/force')
  @Roles(Role.ADMIN)
  async forceSync(
    @Param('tenantId') tenantId: string,
    @Req() req: any,
  ): Promise<void> {
    // Asegurarse de que el tenant coincida con el del usuario
    if (req.user.tenantId !== tenantId) {
      throw new Error('No autorizado para forzar sincronización para este tenant');
    }

    await this.scheduleUseCase.forceSync(tenantId);
  }

  @Get(':tenantId/config')
  @Roles(Role.ADMIN)
  async getConfig(
    @Param('tenantId') tenantId: string,
    @Req() req: any,
  ): Promise<SheetConfig | null> {
    // Asegurarse de que el tenant coincida con el del usuario
    if (req.user.tenantId !== tenantId) {
      throw new Error('No autorizado para obtener configuración para este tenant');
    }

    const config = await this.prisma.sheetConfig.findUnique({
      where: {
        tenantId,
      },
    });

    if (!config) {
      return null;
    }

    return {
      sheetId: config.sheetId,
      range: config.range,
      updateFrequency: config.updateFrequency,
      tenantId: config.tenantId,
    };
  }
} 