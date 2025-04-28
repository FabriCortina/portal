import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CollaboratorSyncService } from '@/application/use-cases/schedule-collaborator-sync.use-case';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import { Roles } from '@/common/decorators/roles.decorator';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { CurrentUserType } from '@/common/types/current-user.type';
import { SheetConfigDto } from '@/collaborator-sync/dto/sheet-config.dto';

@ApiTags('Collaborator Sync')
@Controller('collaborator-sync')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class CollaboratorSyncController {
  constructor(private readonly syncService: CollaboratorSyncService) {}

  @Post('schedule')
  @Roles('admin')
  @ApiOperation({ summary: 'Programar sincronización de colaboradores' })
  @ApiResponse({ status: 200, description: 'Sincronización programada exitosamente' })
  async scheduleSync(
    @CurrentUser() user: CurrentUserType,
    @Body() config: SheetConfigDto,
  ) {
    return this.syncService.schedule({
      ...config,
      tenantId: user.tenantId,
    });
  }

  @Post('force/:tenantId')
  @Roles('admin')
  @ApiOperation({ summary: 'Forzar sincronización de colaboradores' })
  @ApiResponse({ status: 200, description: 'Sincronización forzada exitosamente' })
  async forceSync(@Param('tenantId') tenantId: string) {
    return this.syncService.forceSync(tenantId);
  }
} 