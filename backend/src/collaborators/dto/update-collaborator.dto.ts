import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCollaboratorDto {
  @ApiProperty({ 
    example: 'Juan Pérez', 
    description: 'Nombre completo del colaborador',
    required: false
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ 
    example: 'Desarrollador', 
    description: 'Rol del colaborador',
    required: false
  })
  @IsString()
  @IsOptional()
  role?: string;

  @ApiProperty({ 
    example: '12345678', 
    description: 'DNI del colaborador',
    required: false
  })
  @IsString()
  @IsOptional()
  dni?: string;

  @ApiProperty({ 
    example: '20-12345678-9', 
    description: 'CUIT del colaborador',
    required: false
  })
  @IsString()
  @IsOptional()
  cuit?: string;

  @ApiProperty({ 
    example: 'juan.perez@sooft.com', 
    description: 'Correo electrónico corporativo',
    required: false
  })
  @IsEmail()
  @IsOptional()
  sooftEmail?: string;

  @ApiProperty({ 
    example: 'juan.perez@gmail.com', 
    description: 'Correo electrónico personal',
    required: false
  })
  @IsEmail()
  @IsOptional()
  personalEmail?: string;

  @ApiProperty({ 
    example: true, 
    description: 'Estado del colaborador',
    required: false
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({ 
    example: 'client-123', 
    description: 'ID del cliente al que pertenece el colaborador',
    required: false
  })
  @IsString()
  @IsOptional()
  clientId?: string;
} 