-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_timeOneId_fkey" FOREIGN KEY ("timeOneId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_timeTwoId_fkey" FOREIGN KEY ("timeTwoId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_winningTime_fkey" FOREIGN KEY ("winningTime") REFERENCES "countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
