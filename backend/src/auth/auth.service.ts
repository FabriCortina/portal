import { Injectable, UnauthorizedException, ConflictException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../infrastructure/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { TokensDto } from './dto/tokens.dto';
import { RegisterOperationsDto } from './dto/register-operations.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  async login(dto: LoginDto): Promise<TokensDto> {
    const user = await this.validateUser(dto.email, dto.password);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const tokens = await this.generateTokens(user.id, user.email);
    await this.saveRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  async refreshToken(dto: RefreshTokenDto): Promise<TokensDto> {
    try {
      // Verificar el token en la base de datos
      const refreshToken = await this.prisma.refreshToken.findUnique({
        where: { token: dto.refreshToken },
        include: { user: true },
      });

      if (!refreshToken) {
        throw new UnauthorizedException('Token de refresco inválido');
      }

      // Verificar el token JWT
      const payload = this.jwtService.verify(dto.refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      if (payload.sub !== refreshToken.user.id) {
        throw new UnauthorizedException('Token de refresco inválido');
      }

      // Generar nuevos tokens
      const tokens = await this.generateTokens(refreshToken.user.id, refreshToken.user.email);

      // Eliminar el token viejo y guardar el nuevo
      await this.prisma.refreshToken.delete({
        where: { id: refreshToken.id },
      });
      await this.saveRefreshToken(refreshToken.user.id, tokens.refreshToken);

      return tokens;
    } catch (error) {
      throw new UnauthorizedException('Token de refresco inválido');
    }
  }

  async logout(userId: string): Promise<void> {
    // Eliminar todos los refresh tokens del usuario
    await this.prisma.refreshToken.deleteMany({
      where: { userId },
    });
  }

  private async generateTokens(userId: string, email: string): Promise<TokensDto> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
          expiresIn: this.configService.get<string>('JWT_EXPIRATION'),
        },
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRATION'),
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  private async saveRefreshToken(userId: string, token: string): Promise<void> {
    await this.prisma.refreshToken.create({
      data: {
        token,
        userId,
      },
    });
  }

  async registerOperations(dto: RegisterOperationsDto): Promise<{ message: string }> {
    try {
      // Verificar si el usuario ya existe
      const existingUser = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (existingUser) {
        throw new ConflictException('El correo electrónico ya está registrado');
      }

      // Buscar el tenant sooft
      const sooftTenant = await this.prisma.tenant.findUnique({
        where: { name: 'sooft' },
      });

      if (!sooftTenant) {
        throw new NotFoundException('No se encontró el tenant sooft');
      }

      // Hashear la contraseña
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      // Crear el usuario
      await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          name: dto.name,
          role: 'operations',
          tenantId: sooftTenant.id,
        },
      });

      return { message: 'Usuario de operaciones registrado exitosamente' };
    } catch (error) {
      if (error instanceof ConflictException || error instanceof NotFoundException) {
        throw error;
      }
      throw new Error('Error al registrar el usuario de operaciones');
    }
  }
} 