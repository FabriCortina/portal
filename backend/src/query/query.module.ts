import { Module } from '@nestjs/common';
import { QueryService } from './query.service';
import { QueryController } from './query.controller';
import { PrismaModule } from '../infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [QueryController],
  providers: [QueryService],
  exports: [QueryService],
})
export class QueryModule {} 