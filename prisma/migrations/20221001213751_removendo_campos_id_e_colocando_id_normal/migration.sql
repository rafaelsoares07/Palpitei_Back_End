/*
  Warnings:

  - The primary key for the `permissions_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users_permissions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users_roles` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "permissions_roles" DROP CONSTRAINT "permissions_roles_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "permissions_roles_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users_permissions" DROP CONSTRAINT "users_permissions_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_permissions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users_roles" DROP CONSTRAINT "users_roles_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_roles_pkey" PRIMARY KEY ("id");
