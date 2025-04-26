import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TokensDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'Token de acceso JWT',
  })
  @IsString({ message: 'El token de acceso debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El token de acceso es requerido' })
  accessToken: string;

  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'Token de refresco JWT',
  })
  @IsString({ message: 'El token de refresco debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El token de refresco es requerido' })
  refreshToken: string;
} 