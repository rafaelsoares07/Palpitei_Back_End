/*
  Warnings:

  - Added the required column `stadiumId` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "stadiumId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_stadiumId_fkey" FOREIGN KEY ("stadiumId") REFERENCES "stadium"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
