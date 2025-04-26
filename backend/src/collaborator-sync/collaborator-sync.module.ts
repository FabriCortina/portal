import { Module } from '@nestjs/common';
import { CollaboratorSyncController } from '../interface/controllers/collaborator-sync.controller';
import { ScheduleCollaboratorSyncUseCase } from '../application/use-cases/schedule-collaborator-sync.use-case';
import { CollaboratorSyncService } from '../domain/services/collaborator-sync.service';
import { GoogleSheetsAdapter } from '../infrastructure/adapters/google-sheets.adapter';
import { PrismaService } from '../infrastructure/prisma/prisma.service';

@Module({
  controllers: [CollaboratorSyncController],
  providers: [
    ScheduleCollaboratorSyncUseCase,
    CollaboratorSyncService,
    {
      provide: 'GoogleSheetsPort',
      useClass: GoogleSheetsAdapter,
    },
    PrismaService,
  ],
})
export class CollaboratorSyncModule {} 