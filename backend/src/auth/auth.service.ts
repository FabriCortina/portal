import { Injectable, UnauthorizedException, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/prisma/prisma.service';
import { LoginDto, RefreshTokenDto } from '@/auth/dto/auth.dto';
import { TokensDto } from '@/auth/dto/tokens.dto';
import { RegisterOperationsDto } from './dto/register-operations.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { addDays } from 'date-fns';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto): Promise<TokensDto> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const tokens = await this.getTokens(user.id, user.email);
    await this.createRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<TokensDto> {
    const refreshToken = await this.prisma.refreshToken.findUnique({
      where: { token: refreshTokenDto.refreshToken },
      include: { user: true }
    });

    if (!refreshToken || refreshToken.expiresAt < new Date()) {
      throw new UnauthorizedException('Token de actualización inválido o expirado');
    }

    const tokens = await this.getTokens(refreshToken.user.id, refreshToken.user.email);

    // Eliminar el token actual
    await this.prisma.refreshToken.delete({
      where: { id: refreshToken.id }
    });

    // Crear nuevo token
    await this.createRefreshToken(refreshToken.user.id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId: string): Promise<void> {
    await this.prisma.refreshToken.deleteMany({
      where: { userId }
    });
  }

  async registerOperations(dto: RegisterOperationsDto): Promise<{ message: string }> {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (existingUser) {
        throw new ConflictException('El correo electrónico ya está registrado');
      }

      const sooftTenant = await this.prisma.tenant.findUnique({
        where: { name: 'sooft' },
      });

      if (!sooftTenant) {
        throw new NotFoundException('No se encontró el tenant sooft');
      }

      const hashedPassword = await bcrypt.hash(dto.password, 10);

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
      throw new InternalServerErrorException('Error al registrar el usuario de operaciones');
    }
  }

  private async getTokens(userId: string, email: string): Promise<TokensDto> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.JWT_ACCESS_SECRET,
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.JWT_REFRESH_SECRET,
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  private async createRefreshToken(userId: string, token: string): Promise<void> {
    const expiresAt = addDays(new Date(), 7); // 7 días de expiración

    await this.prisma.refreshToken.create({
      data: {
        token,
        userId,
        expiresAt,
      },
    });
  }
} 