import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateCollaboratorDto } from './dto/create-collaborator.dto';
import { UpdateCollaboratorDto } from './dto/update-collaborator.dto';

@Injectable()
export class CollaboratorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, createCollaboratorDto: CreateCollaboratorDto) {
    const { name, role, dni, cuit, sooftEmail, personalEmail, clientId } = createCollaboratorDto;

    // Verificar que no exista un colaborador con el mismo nombre en el tenant
    const existingCollaborator = await this.prisma.collaborator.findFirst({
      where: {
        AND: [
          { tenantId },
          { name }
        ]
      }
    });

    if (existingCollaborator) {
      throw new Error('Ya existe un colaborador con ese nombre en este tenant');
    }

    return this.prisma.collaborator.create({
      data: {
        name,
        role,
        dni,
        cuit,
        sooftEmail,
        personalEmail,
        clientId,
        tenantId,
        isActive: true
      },
      include: {
        client: true
      }
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.collaborator.findMany({
      where: { tenantId },
      include: {
        client: true
      }
    });
  }

  async findOne(tenantId: string, id: string) {
    const collaborator = await this.prisma.collaborator.findFirst({
      where: {
        AND: [
          { id },
          { tenantId }
        ]
      },
      include: {
        client: true
      }
    });

    if (!collaborator) {
      throw new NotFoundException('Colaborador no encontrado');
    }

    return collaborator;
  }

  async update(tenantId: string, id: string, updateCollaboratorDto: UpdateCollaboratorDto) {
    const collaborator = await this.findOne(tenantId, id);

    // Si se está actualizando el nombre, verificar que no exista otro con el mismo nombre
    if (updateCollaboratorDto.name && updateCollaboratorDto.name !== collaborator.name) {
      const existingCollaborator = await this.prisma.collaborator.findFirst({
        where: {
          AND: [
            { tenantId },
            { name: updateCollaboratorDto.name },
            { id: { not: id } }
          ]
        }
      });

      if (existingCollaborator) {
        throw new Error('Ya existe un colaborador con ese nombre en este tenant');
      }
    }

    return this.prisma.collaborator.update({
      where: { id: collaborator.id },
      data: updateCollaboratorDto,
      include: {
        client: true
      }
    });
  }

  async remove(tenantId: string, id: string) {
    const collaborator = await this.findOne(tenantId, id);

    return this.prisma.collaborator.delete({
      where: { id: collaborator.id }
    });
  }

  async findByClient(tenantId: string, clientId: string) {
    return this.prisma.collaborator.findMany({
      where: {
        AND: [
          { tenantId },
          { clientId }
        ]
      },
      include: {
        client: true
      }
    });
  }
} 