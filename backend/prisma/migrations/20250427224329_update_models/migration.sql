/*
  Warnings:

  - You are about to drop the column `type` on the `Metric` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Metric` table. All the data in the column will be lost.
  - Added the required column `cuit` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketMetrics` to the `Metric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `range` to the `SheetConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sheetName` to the `SheetConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateFrequency` to the `SheetConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collaborator" ADD COLUMN     "clientId" TEXT,
ADD COLUMN     "cuit" TEXT NOT NULL,
ADD COLUMN     "dni" TEXT NOT NULL,
ADD COLUMN     "personalEmail" TEXT,
ADD COLUMN     "sooftEmail" TEXT;

-- AlterTable
ALTER TABLE "Metric" DROP COLUMN "type",
DROP COLUMN "value",
ADD COLUMN     "marketMetrics" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "SheetConfig" ADD COLUMN     "range" TEXT NOT NULL,
ADD COLUMN     "sheetName" TEXT NOT NULL,
ADD COLUMN     "updateFrequency" TEXT NOT NULL;
