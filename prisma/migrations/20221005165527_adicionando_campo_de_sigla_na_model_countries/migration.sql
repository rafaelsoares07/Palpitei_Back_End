/*
  Warnings:

  - Added the required column `sigla` to the `countries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "countries" ADD COLUMN     "sigla" TEXT NOT NULL;
