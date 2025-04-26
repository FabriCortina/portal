import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Constantes para los datos de seed
const SEED_DATA = {
  tenants: [
    {
      name: 'sooft',
      users: [
        {
          email: 'operaciones@sooft.com',
          password: 'password_operaciones',
          name: 'Usuario Operaciones',
          role: 'operations' as const,
        },
      ],
    },
    {
      name: 'empresa',
      users: [
        {
          email: 'cliente@empresa.com',
          password: 'password_cliente',
          name: 'Usuario Cliente',
          role: 'client' as const,
        },
      ],
    },
  ],
} as const;

async function main() {
  try {
    console.log('Iniciando seed de la base de datos...');

    // Crear tenants y sus usuarios
    for (const tenantData of SEED_DATA.tenants) {
      // Crear tenant
      const tenant = await prisma.tenant.upsert({
        where: { 
          name: tenantData.name 
        },
        update: {},
        create: {
          name: tenantData.name,
        },
      });

      console.log(`Tenant "${tenant.name}" creado/actualizado`);

      // Crear usuarios para el tenant
      for (const userData of tenantData.users) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        
        const user = await prisma.user.upsert({
          where: { email: userData.email },
          update: {
            password: hashedPassword, // Actualizar contraseña si el usuario existe
            name: userData.name,
            role: userData.role,
            tenantId: tenant.id,
          },
          create: {
            email: userData.email,
            password: hashedPassword,
            name: userData.name,
            role: userData.role,
            tenantId: tenant.id,
          },
        });

        console.log(`Usuario "${user.email}" creado/actualizado para tenant "${tenant.name}"`);
      }
    }

    console.log('Seed completado exitosamente');
  } catch (error) {
    console.error('Error durante el seed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
