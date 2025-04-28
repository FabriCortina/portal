import { Controller, Post, Body, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from '@/application/users/auth.service';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import { Roles } from '@/common/decorators/roles.decorator';
import { LoginDto, RefreshTokenDto } from '@/auth/dto/auth.dto';
import { RegisterOperationsDto } from '@/auth/dto/register-operations.dto';
import { TokensDto } from '@/auth/dto/tokens.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiResponse({
    status: 200,
    description: 'Login exitoso',
    type: TokensDto,
  })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
  async login(@Body() loginDto: LoginDto): Promise<TokensDto> {
    return this.authService.login(loginDto);
  }

  @Post('refresh')
  @ApiOperation({ summary: 'Renovar tokens' })
  @ApiResponse({
    status: 200,
    description: 'Tokens renovados exitosamente',
    type: TokensDto,
  })
  @ApiResponse({ status: 401, description: 'Token de actualización inválido' })
  @ApiBearerAuth()
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto): Promise<TokensDto> {
    return this.authService.refreshTokens(refreshTokenDto);
  }

  @Post('register-operations')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiOperation({ summary: 'Registrar usuario de operaciones' })
  @ApiResponse({ status: 201, description: 'Usuario de operaciones registrado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  @ApiResponse({ status: 409, description: 'El correo electrónico ya está registrado' })
  @ApiBearerAuth()
  async registerOperations(@Body() dto: RegisterOperationsDto) {
    return this.authService.registerOperations(dto);
  }
} 