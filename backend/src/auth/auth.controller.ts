import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginDto, RefreshTokenDto } from './dto/auth.dto';
import { TokensDto } from './dto/tokens.dto';
import { RegisterOperationsDto } from './dto/register-operations.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { CurrentUserType } from '../common/types/current-user.type';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión' })
  @ApiResponse({ 
    status: 200, 
    description: 'Login exitoso',
    type: TokensDto
  })
  async login(@Body() loginDto: LoginDto): Promise<TokensDto> {
    return this.authService.login(loginDto);
  }

  @Post('refresh')
  @ApiOperation({ summary: 'Renovar tokens' })
  @ApiResponse({ 
    status: 200, 
    description: 'Tokens renovados exitosamente',
    type: TokensDto
  })
  async refreshToken(@Body() refreshTokenDto: RefreshTokenDto): Promise<TokensDto> {
    return this.authService.refreshTokens(refreshTokenDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cerrar sesión' })
  @ApiResponse({ status: 200, description: 'Logout exitoso' })
  async logout(@CurrentUser() user: CurrentUserType) {
    await this.authService.logout(user.id);
    return { message: 'Logout exitoso' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtener perfil del usuario' })
  @ApiResponse({ status: 200, description: 'Perfil obtenido exitosamente' })
  getProfile(@CurrentUser() user: CurrentUserType) {
    return user;
  }

  @Post('register-operations')
  @ApiOperation({ summary: 'Registrar usuario de operaciones' })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente' })
  async registerOperations(@Body() dto: RegisterOperationsDto) {
    return this.authService.registerOperations(dto);
  }
} 