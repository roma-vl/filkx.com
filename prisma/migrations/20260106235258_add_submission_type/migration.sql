-- CreateEnum
CREATE TYPE "SubmissionType" AS ENUM ('CONTACT', 'BOOKING');

-- AlterTable
ALTER TABLE "submissions" ADD COLUMN     "type" "SubmissionType" NOT NULL DEFAULT 'CONTACT';
