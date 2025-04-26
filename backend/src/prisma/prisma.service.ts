import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['error', 'warn'],
      errorFormat: 'pretty',
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async cleanDatabase() {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('cleanDatabase no está permitido en producción');
    }
    
    // Orden específico para evitar errores de foreign key
    const models = Reflect.ownKeys(this).filter(key => {
      return typeof key === 'string' && 
             key[0].toLowerCase() === key[0] && 
             key !== '$connect' && 
             key !== '$disconnect' && 
             key !== '$on' && 
             key !== '$transaction' && 
             key !== '$use';
    });

    return await this.$transaction(
      models.map(model => this[model as string].deleteMany())
    );
  }
}
