import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterOperationsDto } from './dto/register-operations.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/operations')
  @ApiOperation({ summary: 'Registrar un nuevo usuario de operaciones' })
  @ApiResponse({ 
    status: 201, 
    description: 'Usuario de operaciones registrado exitosamente' 
  })
  @ApiResponse({ 
    status: 409, 
    description: 'El correo electrónico ya está registrado' 
  })
  async registerOperations(@Body() registerOperationsDto: RegisterOperationsDto) {
    return await this.authService.registerOperations(registerOperationsDto);
  }
} 