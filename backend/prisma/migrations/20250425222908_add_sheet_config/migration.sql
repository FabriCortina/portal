-- CreateTable
CREATE TABLE "SheetConfig" (
    "id" TEXT NOT NULL,
    "sheetId" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "updateFrequency" INTEGER NOT NULL,
    "tenantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SheetConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SheetConfig_tenantId_idx" ON "SheetConfig"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "SheetConfig_tenantId_key" ON "SheetConfig"("tenantId");

-- AddForeignKey
ALTER TABLE "SheetConfig" ADD CONSTRAINT "SheetConfig_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
