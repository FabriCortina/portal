import { Controller, Post, Put, Body, Param } from '@nestjs/common';
import { SheetConfigService } from '@/domain/services/sheet-config.service';
import { SheetConfigDto } from '@/application/sheet-config/dto/sheet-config.dto';

@Controller('sheet-config')
export class SheetConfigController {
  constructor(private readonly sheetConfigService: SheetConfigService) {}

  @Post()
  async createSheetConfig(@Body() data: SheetConfigDto) {
    return this.sheetConfigService.createSheetConfig(data.tenantId, data);
  }

  @Put(':id')
  async updateSheetConfig(
    @Param('id') id: string,
    @Body() data: SheetConfigDto
  ) {
    return this.sheetConfigService.updateSheetConfig(data.tenantId, id, data);
  }
} 