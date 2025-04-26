import { ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterOperationsDto } from './dto/register-operations.dto';

class AuthService {
  async registerOperations(registerOperationsDto: RegisterOperationsDto) {
    const { email, password } = registerOperationsDto;

    // Verificar si el usuario ya existe
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('El usuario ya existe');
    }

    // Crear nuevo usuario de operaciones
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({
      email,
      password: hashedPassword,
      role: 'operations'
    });

    await this.userRepository.save(user);

    return {
      message: 'Usuario de operaciones registrado exitosamente',
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    };
  }
} 