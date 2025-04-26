import { Controller, Post, Body, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from '../../../application/users/services/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../../application/users/guards/roles.guard';
import { Roles } from '../../../application/users/decorators/roles.decorator';
import { RegisterOperationsDto } from '../../../application/users/dto/register-operations.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }

  @Post('refresh')
  async refresh(@Body() refreshDto: { refresh_token: string }) {
    return this.authService.refreshToken(refreshDto.refresh_token);
  }

  @Post('register/operations')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  async registerOperations(@Body() registerOperationsDto: RegisterOperationsDto) {
    return this.authService.registerOperations(registerOperationsDto);
  }
} 