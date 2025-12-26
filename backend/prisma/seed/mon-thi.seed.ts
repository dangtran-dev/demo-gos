import { PrismaClient } from 'generated/prisma';

export async function seedMonThi(prisma: PrismaClient) {
  await prisma.monThi.createMany({
    data: [
      { maMon: 'TOAN', tenMon: 'Toán' },
      { maMon: 'VAN', tenMon: 'Ngữ văn' },
      { maMon: 'NGOAI_NGU', tenMon: 'Ngoại ngữ' },
      { maMon: 'LY', tenMon: 'Vật lí' },
      { maMon: 'HOA', tenMon: 'Hoá học' },
      { maMon: 'SINH', tenMon: 'Sinh học' },
      { maMon: 'SU', tenMon: 'Lịch sử' },
      { maMon: 'DIA', tenMon: 'Địa lí' },
      { maMon: 'GDCD', tenMon: 'GDCD' },
    ],
    skipDuplicates: true,
  });
}
