import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionDTO } from '@love-match/definitions';
import { PersonalQuestionMongo } from '../../models/personalQuestion';

import { PersonalQuestionService } from './personalQuestion.service';

@Controller('personalQuestion')
export class PersonalQuestionController {
  constructor(
    private readonly personalQuestionService: PersonalQuestionService
  ) {}

  @Post()
  async createPersonalQuestion(
    @Body() createQuestionDTO: CreateQuestionDTO
  ): Promise<PersonalQuestionMongo> {
    return this.personalQuestionService.createQuestion(createQuestionDTO);
  }
}
