import { Controller } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('collaborators')
@Controller('collaborators')
export class CollaboratorsController {
  constructor(private readonly collaboratorsService: CollaboratorsService) {}
} 