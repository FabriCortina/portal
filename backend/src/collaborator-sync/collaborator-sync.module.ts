import { Module } from '@nestjs/common';
import { GoogleSheetsService } from './services/google-sheets.service';
import { CollaboratorSyncController } from './controllers/collaborator-sync.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CollaboratorSyncController],
  providers: [GoogleSheetsService],
  exports: [GoogleSheetsService],
})
export class CollaboratorSyncModule {} 