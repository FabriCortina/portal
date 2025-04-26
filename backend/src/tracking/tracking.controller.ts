import { Controller } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tracking')
@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}
} 