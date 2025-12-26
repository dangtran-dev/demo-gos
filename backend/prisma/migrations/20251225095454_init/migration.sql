-- CreateTable
CREATE TABLE "ThiSinh" (
    "sbd" TEXT NOT NULL,

    CONSTRAINT "ThiSinh_pkey" PRIMARY KEY ("sbd")
);

-- CreateTable
CREATE TABLE "MonThi" (
    "id" SERIAL NOT NULL,
    "maMon" TEXT NOT NULL,
    "tenMon" TEXT NOT NULL,

    CONSTRAINT "MonThi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiemThi" (
    "id" SERIAL NOT NULL,
    "sbd" TEXT NOT NULL,
    "maMon" TEXT NOT NULL,
    "diem" DOUBLE PRECISION NOT NULL,
    "maNgoaiNgu" TEXT,

    CONSTRAINT "DiemThi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MonThi_maMon_key" ON "MonThi"("maMon");

-- AddForeignKey
ALTER TABLE "DiemThi" ADD CONSTRAINT "DiemThi_sbd_fkey" FOREIGN KEY ("sbd") REFERENCES "ThiSinh"("sbd") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiemThi" ADD CONSTRAINT "DiemThi_maMon_fkey" FOREIGN KEY ("maMon") REFERENCES "MonThi"("maMon") ON DELETE RESTRICT ON UPDATE CASCADE;
