/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[photoId,userId]` on the table `Like`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Like.photoId_userId_unique" ON "Like"("photoId", "userId");
