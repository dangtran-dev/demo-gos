import { PrismaClient } from 'generated/prisma';

export async function seedThiSinh(prisma: PrismaClient) {
  const csvPath = '/data/diem_thi_thpt_2024.csv';

  await prisma.$executeRawUnsafe(`
    CREATE TEMP TABLE raw_thi_sinh (
      sbd TEXT,
      toan FLOAT,
      ngu_van FLOAT,
      ngoai_ngu FLOAT,
      vat_li FLOAT,
      hoa_hoc FLOAT,
      sinh_hoc FLOAT,
      lich_su FLOAT,
      dia_li FLOAT,
      gdcd FLOAT,
      ma_ngoai_ngu TEXT
    );
  `);

  await prisma.$executeRawUnsafe(`
    COPY raw_thi_sinh
    FROM '${csvPath}'
    DELIMITER ','
    CSV HEADER
    NULL '';
  `);

  await prisma.$executeRawUnsafe(`
    INSERT INTO "ThiSinh" (sbd)
    SELECT DISTINCT sbd
    FROM raw_thi_sinh
    WHERE sbd IS NOT NULL AND sbd != ''
    ON CONFLICT (sbd) DO NOTHING; 
  `);

  await prisma.$executeRawUnsafe(`
    DROP TABLE IF EXISTS raw_thi_sinh;
  `);
}
