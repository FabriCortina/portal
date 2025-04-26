import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infrastructure/prisma/prisma.service';

@Injectable()
export class QueryService {
  constructor(private prisma: PrismaService) {}
} 