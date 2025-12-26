/*
  Warnings:

  - A unique constraint covering the columns `[sbd,maMon]` on the table `DiemThi` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DiemThi_sbd_maMon_key" ON "DiemThi"("sbd", "maMon");
