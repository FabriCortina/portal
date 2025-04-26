import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordOperations = await bcrypt.hash('password_operaciones', 10);
  const passwordClient = await bcrypt.hash('password_cliente', 10);

  // Primero, crear los tenants
  const tenantSooft = await prisma.tenant.upsert({
    where: { name: 'sooft' },
    update: {},
    create: {
      name: 'sooft',
    },
  });

  const tenantEmpresa = await prisma.tenant.upsert({
    where: { name: 'empresa' },
    update: {},
    create: {
      name: 'empresa',
    },
  });

  // Crear usuario de operaciones
  await prisma.user.upsert({
    where: { email: 'operaciones@sooft.com' },
    update: {},
    create: {
      email: 'operaciones@sooft.com',
      password: passwordOperations,
      role: 'operations',
      name: 'Usuario Operaciones',
      tenant: {
        connect: { id: tenantSooft.id },
      },
    },
  });

  // Crear usuario de cliente
  await prisma.user.upsert({
    where: { email: 'cliente@empresa.com' },
    update: {},
    create: {
      email: 'cliente@empresa.com',
      password: passwordClient,
      role: 'client',
      name: 'Usuario Cliente',
      tenant: {
        connect: { id: tenantEmpresa.id },
      },
    },
  });

  console.log('✅ Usuarios y Tenants creados correctamente.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
