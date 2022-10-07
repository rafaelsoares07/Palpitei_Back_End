/*
  Warnings:

  - You are about to drop the column `round` on the `matches` table. All the data in the column will be lost.
  - Added the required column `roundId` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "matches" DROP COLUMN "round",
ADD COLUMN     "roundId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
