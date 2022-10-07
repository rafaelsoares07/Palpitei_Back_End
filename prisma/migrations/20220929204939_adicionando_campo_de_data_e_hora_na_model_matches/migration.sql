/*
  Warnings:

  - Added the required column `dateAndHora` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "dateAndHora" TIMESTAMP NOT NULL;
