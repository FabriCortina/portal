/*
  Warnings:

  - You are about to drop the column `address` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Collaborator` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Collaborator` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Metric` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Metric` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Query` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Query` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Query` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Tracking` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Tracking` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Tracking` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Tracking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email,tenantId]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,tenantId]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni,tenantId]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuit,tenantId]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sooftEmail,tenantId]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[personalEmail,tenantId]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressNumber` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressStreet` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bloodType` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientEmail` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractCompany` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractCondition` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuit` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dependents` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `education` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyContactName` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyContactPhone` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstContractDate` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasChildren` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasDisability` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasFoodRestriction` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `healthInsurance` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leader` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `management` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalStatus` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxEducationLevel` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personalEmail` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sede` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seniority` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sooftEmail` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tshirtSize` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `Collaborator` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `averageBugs` to the `Metric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `averageRotation` to the `Metric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `averageSatisfaction` to the `Metric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Metric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `completedSprintsPercentage` to the `Metric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketMetrics` to the `Metric` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collaboratorId` to the `Query` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Query` table without a default value. This is not possible if the table is not empty.
  - Added the required column `problemDescription` to the `Query` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resolver` to the `Query` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topicType` to the `Query` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bugsCount` to the `Tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collaboratorId` to the `Tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedback` to the `Tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issuesToResolve` to the `Tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last15DaysSatisfaction` to the `Tracking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sprintPercentage` to the `Tracking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tracking" DROP CONSTRAINT "Tracking_clientId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "address",
DROP COLUMN "phone",
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Collaborator" DROP COLUMN "email",
DROP COLUMN "role",
ADD COLUMN     "addressApartment" TEXT,
ADD COLUMN     "addressFloor" TEXT,
ADD COLUMN     "addressNumber" TEXT NOT NULL,
ADD COLUMN     "addressStreet" TEXT NOT NULL,
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "alert" TEXT,
ADD COLUMN     "bank" TEXT NOT NULL,
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "bloodType" TEXT NOT NULL,
ADD COLUMN     "child1Age" INTEGER,
ADD COLUMN     "child1BirthDate" TIMESTAMP(3),
ADD COLUMN     "child1Name" TEXT,
ADD COLUMN     "child2Age" INTEGER,
ADD COLUMN     "child2BirthDate" TIMESTAMP(3),
ADD COLUMN     "child2Name" TEXT,
ADD COLUMN     "child3Age" INTEGER,
ADD COLUMN     "child3BirthDate" TIMESTAMP(3),
ADD COLUMN     "child3Name" TEXT,
ADD COLUMN     "child4Age" INTEGER,
ADD COLUMN     "child4BirthDate" TIMESTAMP(3),
ADD COLUMN     "child4Name" TEXT,
ADD COLUMN     "child5Age" INTEGER,
ADD COLUMN     "child5BirthDate" TIMESTAMP(3),
ADD COLUMN     "child5Name" TEXT,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "clientEmail" TEXT NOT NULL,
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "contractCompany" TEXT NOT NULL,
ADD COLUMN     "contractCondition" TEXT NOT NULL,
ADD COLUMN     "contractEndDate" TIMESTAMP(3),
ADD COLUMN     "cuit" TEXT NOT NULL,
ADD COLUMN     "declaredIllness" TEXT,
ADD COLUMN     "dependents" INTEGER NOT NULL,
ADD COLUMN     "dni" TEXT NOT NULL,
ADD COLUMN     "education" TEXT NOT NULL,
ADD COLUMN     "emergencyContactName" TEXT NOT NULL,
ADD COLUMN     "emergencyContactPhone" TEXT NOT NULL,
ADD COLUMN     "firstContractDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "foodRestrictionDetails" TEXT,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "hasChildren" BOOLEAN NOT NULL,
ADD COLUMN     "hasDisability" BOOLEAN NOT NULL,
ADD COLUMN     "hasFoodRestriction" BOOLEAN NOT NULL,
ADD COLUMN     "healthInsurance" TEXT NOT NULL,
ADD COLUMN     "hobbies" TEXT,
ADD COLUMN     "leader" TEXT NOT NULL,
ADD COLUMN     "management" TEXT NOT NULL,
ADD COLUMN     "maritalStatus" TEXT NOT NULL,
ADD COLUMN     "maxEducationLevel" TEXT NOT NULL,
ADD COLUMN     "nationality" TEXT NOT NULL,
ADD COLUMN     "observations" TEXT,
ADD COLUMN     "personalEmail" TEXT NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "project" TEXT NOT NULL,
ADD COLUMN     "province" TEXT NOT NULL,
ADD COLUMN     "reference" TEXT,
ADD COLUMN     "secondContractDate" TIMESTAMP(3),
ADD COLUMN     "sede" TEXT NOT NULL,
ADD COLUMN     "seniority" INTEGER NOT NULL,
ADD COLUMN     "sooftEmail" TEXT NOT NULL,
ADD COLUMN     "spouseBirthDate" TIMESTAMP(3),
ADD COLUMN     "spouseName" TEXT,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "terminationDate" TIMESTAMP(3),
ADD COLUMN     "terminationDetails" TEXT,
ADD COLUMN     "terminationReason" TEXT,
ADD COLUMN     "tshirtSize" TEXT NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "Metric" DROP COLUMN "name",
DROP COLUMN "value",
ADD COLUMN     "averageBugs" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "averageRotation" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "averageSatisfaction" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "completedSprintsPercentage" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "marketMetrics" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Query" DROP COLUMN "content",
DROP COLUMN "status",
DROP COLUMN "title",
ADD COLUMN     "attachments" TEXT,
ADD COLUMN     "collaboratorId" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "problemDescription" TEXT NOT NULL,
ADD COLUMN     "resolutionDate" TIMESTAMP(3),
ADD COLUMN     "resolver" TEXT NOT NULL,
ADD COLUMN     "topicType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tracking" DROP COLUMN "clientId",
DROP COLUMN "description",
DROP COLUMN "status",
DROP COLUMN "title",
ADD COLUMN     "bugsCount" INTEGER NOT NULL,
ADD COLUMN     "collaboratorId" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "feedback" TEXT NOT NULL,
ADD COLUMN     "issuesToResolve" TEXT NOT NULL,
ADD COLUMN     "last15DaysSatisfaction" INTEGER NOT NULL,
ADD COLUMN     "sprintPercentage" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE INDEX "Client_tenantId_idx" ON "Client"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_tenantId_key" ON "Client"("email", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_tenantId_key" ON "Client"("name", "tenantId");

-- CreateIndex
CREATE INDEX "Collaborator_tenantId_idx" ON "Collaborator"("tenantId");

-- CreateIndex
CREATE INDEX "Collaborator_clientId_idx" ON "Collaborator"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_dni_tenantId_key" ON "Collaborator"("dni", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_cuit_tenantId_key" ON "Collaborator"("cuit", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_sooftEmail_tenantId_key" ON "Collaborator"("sooftEmail", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_personalEmail_tenantId_key" ON "Collaborator"("personalEmail", "tenantId");

-- CreateIndex
CREATE INDEX "Metric_tenantId_idx" ON "Metric"("tenantId");

-- CreateIndex
CREATE INDEX "Metric_clientId_idx" ON "Metric"("clientId");

-- CreateIndex
CREATE INDEX "Query_tenantId_idx" ON "Query"("tenantId");

-- CreateIndex
CREATE INDEX "Query_collaboratorId_idx" ON "Query"("collaboratorId");

-- CreateIndex
CREATE INDEX "Tracking_tenantId_idx" ON "Tracking"("tenantId");

-- CreateIndex
CREATE INDEX "Tracking_collaboratorId_idx" ON "Tracking"("collaboratorId");

-- CreateIndex
CREATE INDEX "User_tenantId_idx" ON "User"("tenantId");

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracking" ADD CONSTRAINT "Tracking_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Query" ADD CONSTRAINT "Query_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metric" ADD CONSTRAINT "Metric_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
