  async createSheetConfig(tenantId: string, data: SheetConfigDto) {
    return this.prisma.sheetConfig.create({
      data: {
        tenantId,
        spreadsheetId: data.spreadsheetId,
        sheetName: data.sheetName,
        range: data.range,
        updateFrequency: data.updateFrequency,
        lastSyncDate: data.lastSyncDate || null
      }
    });
  }

  async updateSheetConfig(tenantId: string, id: string, data: SheetConfigDto) {
    return this.prisma.sheetConfig.update({
      where: {
        id,
        tenantId
      },
      data: {
        spreadsheetId: data.spreadsheetId,
        sheetName: data.sheetName,
        range: data.range,
        updateFrequency: data.updateFrequency,
        lastSyncDate: data.lastSyncDate || null
      }
    });
  } 