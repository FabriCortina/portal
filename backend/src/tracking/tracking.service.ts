import { Injectable } from '@nestjs/common';
import { PrismaService } from '../infrastructure/prisma/prisma.service';

@Injectable()
export class TrackingService {
  constructor(private prisma: PrismaService) {}
} 