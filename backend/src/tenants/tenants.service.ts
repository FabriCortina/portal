import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../infrastructure/prisma/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private prisma: PrismaService) {}

  async createTenant(data: { name: string }) {
    // Verificar si ya existe un tenant con ese nombre
    const existingTenant = await this.prisma.tenant.findUnique({
      where: { name: data.name },
    });

    if (existingTenant) {
      throw new ConflictException('Ya existe un tenant con ese nombre');
    }

    return this.prisma.tenant.create({
      data,
      select: {
        id: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findTenantByName(name: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { name },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant no encontrado');
    }

    return tenant;
  }

  async findTenantById(id: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id },
      include: {
        users: {
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant no encontrado');
    }

    return tenant;
  }
} 