/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[hashtag]` on the table `Hashtag`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hashtag.hashtag_unique" ON "Hashtag"("hashtag");
