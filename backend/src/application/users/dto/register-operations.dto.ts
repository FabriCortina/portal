import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterOperationsDto {
  @ApiProperty({
    description: 'El correo electrónico del usuario de operaciones',
    example: 'operador@ejemplo.com'
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'La contraseña del usuario de operaciones',
    example: 'Contraseña123!',
    minLength: 6
  })
  @IsString()
  @MinLength(6)
  password: string;
} 