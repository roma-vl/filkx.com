/*
  Warnings:

  - You are about to drop the `contact_submissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('NEW', 'IN_PROGRESS', 'DONE', 'SPAM');

-- DropTable
DROP TABLE "contact_submissions";

-- CreateTable
CREATE TABLE "submissions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "ip" TEXT,
    "user_agent" TEXT,
    "source" TEXT,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'NEW',
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("id")
);
