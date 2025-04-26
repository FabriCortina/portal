import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    // Crear tenants
    const sooftTenant = await prisma.tenant.upsert({
      where: { name: 'sooft' },
      update: {},
      create: {
        name: 'sooft',
      },
    });

    const empresaTenant = await prisma.tenant.upsert({
      where: { name: 'empresa' },
      update: {},
      create: {
        name: 'empresa',
      },
    });

    // Crear usuarios
    const operacionesPassword = await bcrypt.hash('password_operaciones', 10);
    const clientePassword = await bcrypt.hash('password_cliente', 10);

    await prisma.user.upsert({
      where: { email: 'operaciones@sooft.com' },
      update: {},
      create: {
        email: 'operaciones@sooft.com',
        password: operacionesPassword,
        name: 'Usuario Operaciones',
        role: 'operations',
        tenantId: sooftTenant.id,
      },
    });

    await prisma.user.upsert({
      where: { email: 'cliente@empresa.com' },
      update: {},
      create: {
        email: 'cliente@empresa.com',
        password: clientePassword,
        name: 'Usuario Cliente',
        role: 'client',
        tenantId: empresaTenant.id,
      },
    });

    console.log('Seed completado exitosamente');
  } catch (error) {
    console.error('Error durante el seed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
