import { Controller } from '@nestjs/common';
import { QueryService } from './query.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('queries')
@Controller('queries')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}
} 