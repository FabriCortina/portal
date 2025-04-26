import { IsString, IsEmail, IsNotEmpty, MinLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterOperationsDto {
  @ApiProperty({ example: 'Juan Pérez', description: 'Nombre completo del usuario de operaciones' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @ApiProperty({ example: 'operaciones@sooft.com', description: 'Correo electrónico corporativo' })
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  @Matches(/@sooft\.com$/, { message: 'El correo electrónico debe ser del dominio @sooft.com' })
  email: string;

  @ApiProperty({ example: 'Password123!', description: 'Contraseña del usuario' })
  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message: 'La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial',
    },
  )
  password: string;
} 