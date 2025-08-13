/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."SubscriberAccountUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "phone_number" TEXT,
    "password" TEXT NOT NULL,
    "plan" TEXT[] DEFAULT ARRAY['FREE']::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMP(3) NOT NULL DEFAULT (now() + interval '30 days'),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SubscriberAccountUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmployeeUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 100,
    "role" TEXT[] DEFAULT ARRAY['OPERATOR']::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "relatedToId" TEXT NOT NULL,

    CONSTRAINT "EmployeeUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CompanyData" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyAddress" TEXT,
    "companyPhone" TEXT,
    "companyEmail" TEXT,
    "website" TEXT,
    "socialMedia" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "relatedToId" TEXT NOT NULL,

    CONSTRAINT "CompanyData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Vehicle" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "vin" TEXT,
    "color" TEXT,
    "ownerName" TEXT,
    "ownerSurname" TEXT,
    "ownerPhone" TEXT,
    "ownerEmail" TEXT,
    "ownerAddress" TEXT,
    "details" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "relatedToId" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WorkOrder" (
    "id" SERIAL NOT NULL,
    "dateReceived" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateCompleted" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'JOINED',
    "description" TEXT,
    "totalCost" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "assignedToId" TEXT NOT NULL,

    CONSTRAINT "WorkOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubscriberAccountUser_email_key" ON "public"."SubscriberAccountUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SubscriberAccountUser_username_key" ON "public"."SubscriberAccountUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeUser_email_key" ON "public"."EmployeeUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeUser_username_key" ON "public"."EmployeeUser"("username");

-- CreateIndex
CREATE INDEX "EmployeeUser_relatedToId_email_idx" ON "public"."EmployeeUser"("relatedToId", "email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_licensePlate_key" ON "public"."Vehicle"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_vin_key" ON "public"."Vehicle"("vin");

-- AddForeignKey
ALTER TABLE "public"."EmployeeUser" ADD CONSTRAINT "EmployeeUser_relatedToId_fkey" FOREIGN KEY ("relatedToId") REFERENCES "public"."SubscriberAccountUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CompanyData" ADD CONSTRAINT "CompanyData_relatedToId_fkey" FOREIGN KEY ("relatedToId") REFERENCES "public"."SubscriberAccountUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Vehicle" ADD CONSTRAINT "Vehicle_relatedToId_fkey" FOREIGN KEY ("relatedToId") REFERENCES "public"."CompanyData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WorkOrder" ADD CONSTRAINT "WorkOrder_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WorkOrder" ADD CONSTRAINT "WorkOrder_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "public"."EmployeeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
