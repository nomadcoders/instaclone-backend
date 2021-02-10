/*
  Warnings:

  - You are about to drop the column `seen` on the `Message` table. All the data in the column will be lost.
  - Added the required column `read` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "seen",
ADD COLUMN     "read" BOOLEAN NOT NULL;
