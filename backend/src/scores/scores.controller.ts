import { Controller, Get, Param } from '@nestjs/common';
import { ScoresService } from './scores.service';

@Controller('scores')
export class ScoresController {
  constructor(private scoresService: ScoresService) {}

  @Get('reports/levels')
  reportPoints() {
    return this.scoresService.reportPoints();
  }

  @Get('reports/top-group-a')
  getTopStudentsA() {
    return this.scoresService.getTopStudentsA();
  }

  @Get(':sbd')
  getScores(@Param('sbd') sbd: string) {
    return this.scoresService.getScores(sbd);
  }
}
