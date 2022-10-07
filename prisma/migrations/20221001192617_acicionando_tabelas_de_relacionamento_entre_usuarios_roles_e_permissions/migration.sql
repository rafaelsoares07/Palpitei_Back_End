-- CreateTable
CREATE TABLE "permissions_roles" (
    "permissionsId" INTEGER NOT NULL,
    "rolesId" INTEGER NOT NULL,

    CONSTRAINT "permissions_roles_pkey" PRIMARY KEY ("permissionsId","rolesId")
);

-- CreateTable
CREATE TABLE "users_roles" (
    "userId" INTEGER NOT NULL,
    "rolesId" INTEGER NOT NULL,

    CONSTRAINT "users_roles_pkey" PRIMARY KEY ("userId","rolesId")
);

-- CreateTable
CREATE TABLE "users_permissions" (
    "permissionsId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "users_permissions_pkey" PRIMARY KEY ("permissionsId","userId")
);

-- AddForeignKey
ALTER TABLE "permissions_roles" ADD CONSTRAINT "permissions_roles_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions_roles" ADD CONSTRAINT "permissions_roles_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "users_permissions_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "users_permissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
