/*
  Warnings:

  - You are about to drop the `permissions_roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "permissions_roles" DROP CONSTRAINT "permissions_roles_permissionsId_fkey";

-- DropForeignKey
ALTER TABLE "permissions_roles" DROP CONSTRAINT "permissions_roles_rolesId_fkey";

-- DropForeignKey
ALTER TABLE "users_permissions" DROP CONSTRAINT "users_permissions_permissionsId_fkey";

-- DropForeignKey
ALTER TABLE "users_permissions" DROP CONSTRAINT "users_permissions_userId_fkey";

-- DropForeignKey
ALTER TABLE "users_roles" DROP CONSTRAINT "users_roles_rolesId_fkey";

-- DropForeignKey
ALTER TABLE "users_roles" DROP CONSTRAINT "users_roles_userId_fkey";

-- DropTable
DROP TABLE "permissions_roles";

-- DropTable
DROP TABLE "users_permissions";

-- DropTable
DROP TABLE "users_roles";

-- CreateTable
CREATE TABLE "permissions_roles1" (
    "id" SERIAL NOT NULL,
    "permissionsId" INTEGER NOT NULL,
    "rolesId" INTEGER NOT NULL,

    CONSTRAINT "permissions_roles1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_roles1" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "rolesId" INTEGER NOT NULL,

    CONSTRAINT "users_roles1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_permissions1" (
    "id" SERIAL NOT NULL,
    "permissionsId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "users_permissions1_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "permissions_roles1" ADD CONSTRAINT "permissions_roles1_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions_roles1" ADD CONSTRAINT "permissions_roles1_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles1" ADD CONSTRAINT "users_roles1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles1" ADD CONSTRAINT "users_roles1_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions1" ADD CONSTRAINT "users_permissions1_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions1" ADD CONSTRAINT "users_permissions1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
