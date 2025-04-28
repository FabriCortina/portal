import { Module } from '@nestjs/common';
import { SheetConfigController } from '../controllers/sheet-config.controller';
import { SheetConfigService } from '@/domain/services/sheet-config.service';
import { PrismaModule } from '@/infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SheetConfigController],
  providers: [SheetConfigService],
  exports: [SheetConfigService],
})
export class SheetConfigModule {} 