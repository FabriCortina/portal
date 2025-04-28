import { IsString, IsNotEmpty, IsEmail, IsDate, IsInt, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateCollaboratorDto {
  @ApiProperty({ example: 'Juan Pérez', description: 'Nombre completo del colaborador' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Desarrollador Senior', description: 'Rol del colaborador' })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({ example: '12345678', description: 'DNI del colaborador' })
  @IsString()
  @IsNotEmpty()
  dni: string;

  @ApiProperty({ example: '20123456789', description: 'CUIT del colaborador' })
  @IsString()
  @IsNotEmpty()
  cuit: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'ID del tenant al que pertenece el colaborador' })
  @IsString()
  @IsNotEmpty()
  tenantId: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'ID del cliente al que pertenece el colaborador', required: false })
  @IsString()
  @IsOptional()
  clientId?: string;

  @ApiProperty({ example: 'juan@sooft.com', description: 'Email corporativo', required: false })
  @IsEmail()
  @IsOptional()
  sooftEmail?: string;

  @ApiProperty({ example: 'juan@personal.com', description: 'Email personal', required: false })
  @IsEmail()
  @IsOptional()
  personalEmail?: string;

  @ApiProperty({ example: true, description: 'Estado activo del colaborador', required: false })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({ example: 'Buenos Aires', description: 'Sede del colaborador' })
  @IsString()
  @IsNotEmpty()
  sede: string;

  @ApiProperty({ example: '2024-01-01', description: 'Fecha del primer contrato' })
  @IsDate()
  @Type(() => Date)
  firstContractDate: Date;

  @ApiProperty({ example: 2, description: 'Antigüedad en años' })
  @IsInt()
  seniority: number;

  @ApiProperty({ example: 'Activo', description: 'Estado del colaborador' })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({ example: 'Tiempo completo', description: 'Condición contractual' })
  @IsString()
  @IsNotEmpty()
  contractCondition: string;

  @ApiProperty({ example: 'Empresa S.A.', description: 'Empresa contratante' })
  @IsString()
  @IsNotEmpty()
  contractCompany: string;

  @ApiProperty({ example: 'Gestión', description: 'Área de gestión' })
  @IsString()
  @IsNotEmpty()
  management: string;

  @ApiProperty({ example: 'María González', description: 'Líder del equipo' })
  @IsString()
  @IsNotEmpty()
  leader: string;

  @ApiProperty({ example: 'Proyecto X', description: 'Proyecto asignado' })
  @IsString()
  @IsNotEmpty()
  project: string;

  @ApiProperty({ example: 'Desarrollador Senior', description: 'Posición en la empresa' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({ example: 'juan@cliente.com', description: 'Email del cliente' })
  @IsEmail()
  @IsNotEmpty()
  clientEmail: string;

  @ApiProperty({ example: '1990-01-01', description: 'Fecha de nacimiento' })
  @IsDate()
  @Type(() => Date)
  birthDate: Date;

  @ApiProperty({ example: 34, description: 'Edad del colaborador' })
  @IsInt()
  age: number;

  @ApiProperty({ example: 'Masculino', description: 'Género' })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ example: 'Argentino', description: 'Nacionalidad' })
  @IsString()
  @IsNotEmpty()
  nationality: string;

  @ApiProperty({ example: 'Soltero', description: 'Estado civil' })
  @IsString()
  @IsNotEmpty()
  maritalStatus: string;

  @ApiProperty({ example: 'Calle Principal 123', description: 'Dirección' })
  @IsString()
  @IsNotEmpty()
  addressStreet: string;

  @ApiProperty({ example: '123', description: 'Número de dirección' })
  @IsString()
  @IsNotEmpty()
  addressNumber: string;

  @ApiProperty({ example: '2', description: 'Piso', required: false })
  @IsString()
  @IsOptional()
  addressFloor?: string;

  @ApiProperty({ example: 'A', description: 'Departamento', required: false })
  @IsString()
  @IsOptional()
  addressApartment?: string;

  @ApiProperty({ example: '1234', description: 'Código postal' })
  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @ApiProperty({ example: 'Buenos Aires', description: 'Ciudad' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Buenos Aires', description: 'Provincia' })
  @IsString()
  @IsNotEmpty()
  province: string;

  @ApiProperty({ example: '1234567890', description: 'Teléfono' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'María Pérez', description: 'Nombre del cónyuge', required: false })
  @IsString()
  @IsOptional()
  spouseName?: string;

  @ApiProperty({ example: '1992-01-01', description: 'Fecha de nacimiento del cónyuge', required: false })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  spouseBirthDate?: Date;

  @ApiProperty({ example: true, description: '¿Tiene hijos?' })
  @IsBoolean()
  hasChildren: boolean;

  @ApiProperty({ example: '1234567890', description: 'Teléfono de emergencia' })
  @IsString()
  @IsNotEmpty()
  emergencyContactPhone: string;

  @ApiProperty({ example: 'Juan Pérez', description: 'Nombre del contacto de emergencia' })
  @IsString()
  @IsNotEmpty()
  emergencyContactName: string;

  @ApiProperty({ example: 'OSDE', description: 'Obra social' })
  @IsString()
  @IsNotEmpty()
  healthInsurance: string;

  @ApiProperty({ example: 2, description: 'Número de dependientes' })
  @IsInt()
  dependents: number;

  @ApiProperty({ example: 'Banco Nación', description: 'Banco' })
  @IsString()
  @IsNotEmpty()
  bank: string;

  @ApiProperty({ example: 'Ingeniería en Sistemas', description: 'Educación' })
  @IsString()
  @IsNotEmpty()
  education: string;

  @ApiProperty({ example: 'Universitario', description: 'Nivel máximo de educación' })
  @IsString()
  @IsNotEmpty()
  maxEducationLevel: string;

  @ApiProperty({ example: 'A+', description: 'Grupo sanguíneo' })
  @IsString()
  @IsNotEmpty()
  bloodType: string;

  @ApiProperty({ example: 'Fútbol, Música', description: 'Hobbies', required: false })
  @IsString()
  @IsOptional()
  hobbies?: string;

  @ApiProperty({ example: 'M', description: 'Talle de remera' })
  @IsString()
  @IsNotEmpty()
  tshirtSize: string;

  @ApiProperty({ example: false, description: '¿Tiene discapacidad?' })
  @IsBoolean()
  hasDisability: boolean;

  @ApiProperty({ example: 'Ninguna', description: 'Enfermedad declarada', required: false })
  @IsString()
  @IsOptional()
  declaredIllness?: string;

  @ApiProperty({ example: false, description: '¿Tiene restricciones alimentarias?' })
  @IsBoolean()
  hasFoodRestriction: boolean;

  @ApiProperty({ example: 'Vegetariano', description: 'Detalles de restricción alimentaria', required: false })
  @IsString()
  @IsOptional()
  foodRestrictionDetails?: string;

  @ApiProperty({ example: 'Observaciones generales', description: 'Observaciones', required: false })
  @IsString()
  @IsOptional()
  observations?: string;
} 