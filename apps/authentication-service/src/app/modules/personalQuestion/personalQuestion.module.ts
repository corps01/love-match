import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonalQuestionSchema } from '../../models/personalQuestion';
import { PersonalQuestionController } from './personalQuestion.controller';
import { PersonalQuestionService } from './personalQuestion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PersonalQuestion', schema: PersonalQuestionSchema },
    ]),
  ],
  controllers: [PersonalQuestionController],
  providers: [PersonalQuestionService],
  exports: [PersonalQuestionService],
})
export class PersonalQuestionModule {}
