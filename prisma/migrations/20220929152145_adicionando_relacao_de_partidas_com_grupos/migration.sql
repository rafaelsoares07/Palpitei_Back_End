-- CreateTable
CREATE TABLE "matches" (
    "id" SERIAL NOT NULL,
    "round" INTEGER NOT NULL,
    "day" TEXT NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
