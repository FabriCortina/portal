import { IsString, IsEmail, IsNotEmpty, MinLength, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterOperationsDto {
  @ApiProperty({ 
    example: 'Juan Pérez', 
    description: 'Nombre completo del usuario' 
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ 
    example: 'juan.perez@example.com', 
    description: 'Correo electrónico del usuario' 
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ 
    example: 'Contraseña123!', 
    description: 'Contraseña del usuario',
    minLength: 6
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ 
    example: 'admin', 
    description: 'Rol del usuario',
    enum: ['admin', 'user', 'operations']
  })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({ 
    example: '550e8400-e29b-41d4-a716-446655440000', 
    description: 'ID del tenant al que pertenece el usuario' 
  })
  @IsString()
  @IsNotEmpty()
  tenantId: string;

  @ApiProperty({
    description: 'Lista de permisos del usuario',
    example: ['read', 'write', 'delete'],
    type: [String]
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  permissions: string[];
} 