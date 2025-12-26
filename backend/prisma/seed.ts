import { PrismaClient } from '../generated/prisma';
import { seedDiemThi } from './seed/diem-thi.seed';
import { seedMonThi } from './seed/mon-thi.seed';
import { seedThiSinh } from './seed/thi-sinh.seed';

const prisma = new PrismaClient();

async function main() {
  await seedMonThi(prisma);
  await seedThiSinh(prisma);
  await seedDiemThi(prisma);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
