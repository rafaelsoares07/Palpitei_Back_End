/*
  Warnings:

  - Added the required column `timeOneId` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeTwoId` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "gameScoreTimeOne" INTEGER,
ADD COLUMN     "gameScoreTimeTwo" INTEGER,
ADD COLUMN     "timeOneId" INTEGER NOT NULL,
ADD COLUMN     "timeTwoId" INTEGER NOT NULL,
ADD COLUMN     "winningTime" INTEGER;
