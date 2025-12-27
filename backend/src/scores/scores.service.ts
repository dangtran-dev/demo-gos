import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SubjectScoreReport } from 'types';

@Injectable()
export class ScoresService {
  constructor(private prisma: PrismaService) {}

  async countByRange(
    subject: string,
    min?: number,
    max?: number,
  ): Promise<number> {
    return this.prisma.diemThi.count({
      where: {
        maMon: subject,
        diem: {
          ...(min !== undefined && { gte: min }),
          ...(max !== undefined && { lt: max }),
        },
      },
    });
  }

  async reportPoints() {
    const subjects = await this.prisma.monThi.findMany({
      select: {
        maMon: true,
        tenMon: true,
      },
    });

    const data: SubjectScoreReport[] = [];

    for (const { maMon, tenMon } of subjects) {
      const [excellent, good, average, poor] = await Promise.all([
        this.countByRange(maMon, 8, undefined),
        this.countByRange(maMon, 6, 8),
        this.countByRange(maMon, 4, 6),
        this.countByRange(maMon, undefined, 4),
      ]);

      data.push({
        subject: tenMon,
        excellent,
        good,
        average,
        poor,
      });
    }

    return {
      levels: [
        { key: 'excellent', label: '>= 8' },
        { key: 'good', label: '6 – < 8' },
        { key: 'average', label: '4 – < 6' },
        { key: 'poor', label: '< 4' },
      ],
      data,
    };
  }

  async getTopStudentsA() {
    const data = await this.prisma.$queryRaw`
    SELECT ts."sbd", SUM(dt."diem") AS "totalScore"
    FROM "ThiSinh" ts JOIN "DiemThi" dt
    ON ts."sbd" = dt."sbd"
    WHERE dt."maMon" IN ('TOAN', 'LY', 'HOA')
    GROUP BY ts."sbd"
    ORDER BY "totalScore" DESC
    LIMIT 10
    `;

    return data;
  }

  async getScores(sbd: string) {
    const candidate = await this.prisma.thiSinh.findUnique({ where: { sbd } });

    if (!candidate) {
      throw new NotFoundException(
        'Mã thí sinh không tồn tại! Vui lòng kiểm tra lại.',
      );
    }

    const scores = await this.prisma.diemThi.findMany({
      where: {
        sbd,
      },
    });

    return scores;
  }
}
