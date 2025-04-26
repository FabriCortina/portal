import { Module } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { PrismaModule } from '../infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TenantsService],
  exports: [TenantsService],
})
export class TenantsModule {} 