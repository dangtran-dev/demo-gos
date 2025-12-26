import { PrismaClient } from 'generated/prisma';

export async function seedDiemThi(prisma: PrismaClient) {
  const csvPath = '/data/diem_thi_thpt_2024.csv';

  await prisma.$executeRawUnsafe(`
  CREATE TEMP TABLE raw_scores (
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
  COPY raw_scores
  FROM '${csvPath}'
  DELIMITER ','
  CSV HEADER
  NULL '';
`);

  await prisma.$executeRawUnsafe(`
  INSERT INTO "DiemThi"(sbd, "maMon", diem, "maNgoaiNgu")
  SELECT
    sbd,
    m.mon,
    m.diem,
    CASE 
      WHEN m.mon = 'NGOAI_NGU' THEN ma_ngoai_ngu
      ELSE NULL
    END
  FROM raw_scores
  CROSS JOIN LATERAL (
    VALUES
      ('TOAN', toan),
      ('VAN', ngu_van),
      ('NGOAI_NGU', ngoai_ngu),
      ('LY', vat_li),
      ('HOA', hoa_hoc),
      ('SINH', sinh_hoc),
      ('SU', lich_su),
      ('DIA', dia_li),
      ('GDCD', gdcd)
  ) AS m(mon, diem)
  WHERE m.diem IS NOT NULL
  ON CONFLICT (sbd, "maMon") DO NOTHING;
`);
}
