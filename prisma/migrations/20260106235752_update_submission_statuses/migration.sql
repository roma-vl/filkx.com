/*
  Warnings:

  - The values [IN_PROGRESS] on the enum `SubmissionStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SubmissionStatus_new" AS ENUM ('NEW', 'PROCESSING', 'DONE', 'ARCHIVED', 'SPAM', 'DELETED');
ALTER TABLE "public"."submissions" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "submissions" ALTER COLUMN "status" TYPE "SubmissionStatus_new" USING ("status"::text::"SubmissionStatus_new");
ALTER TYPE "SubmissionStatus" RENAME TO "SubmissionStatus_old";
ALTER TYPE "SubmissionStatus_new" RENAME TO "SubmissionStatus";
DROP TYPE "public"."SubmissionStatus_old";
ALTER TABLE "submissions" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;
