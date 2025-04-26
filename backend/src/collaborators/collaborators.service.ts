import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infrastructure/prisma/prisma.service';

@Injectable()
export class CollaboratorsService {
  constructor(private prisma: PrismaService) {}
} 