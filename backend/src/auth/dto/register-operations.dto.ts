import { IsString, IsEmail, IsNotEmpty, MinLength, Matches, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterOperationsDto {
  @ApiProperty({
    description: 'Nombre de la operación',
    example: 'Crear Usuario',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    description: 'Lista de permisos',
    example: ['read', 'write'],
  })
  @IsArray()
  @IsString({ each: true })
  permissions!: string[];

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
    description: 'Contraseña del usuario' 
  })
  @IsString()
  @IsNotEmpty()
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
    example: 'tenant-123', 
    description: 'ID del tenant al que pertenece el usuario' 
  })
  @IsString()
  @IsNotEmpty()
  tenantId: string;
} 