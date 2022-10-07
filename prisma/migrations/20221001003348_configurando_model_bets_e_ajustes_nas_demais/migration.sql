/*
  Warnings:

  - Added the required column `groupId` to the `rounds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rounds" ADD COLUMN     "groupId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "bets" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "matcheId" INTEGER NOT NULL,
    "winningTime" INTEGER NOT NULL,
    "gameScoreTimeOne" INTEGER NOT NULL,
    "gameScoreTimeTwo" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "correct" BOOLEAN,

    CONSTRAINT "bets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bets" ADD CONSTRAINT "bets_matcheId_fkey" FOREIGN KEY ("matcheId") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bets" ADD CONSTRAINT "bets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
