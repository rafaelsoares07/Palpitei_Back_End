/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `roles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "roles_description_key" ON "roles"("description");
