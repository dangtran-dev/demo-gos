import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectsService {
  constructor(private prisma: PrismaService) {}

  async getSubjects() {
    const subjects = await this.prisma.monThi.findMany();

    return subjects;
  }
}
