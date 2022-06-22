import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateManyQuestionsDTO, CreateQuestionDTO } from '@love-match/definitions';
import { Model, Types } from 'mongoose';
import {
  PersonalQuestionDocument,
  PersonalQuestionMongo,
} from '../../models/personalQuestion';

@Injectable()
export class PersonalQuestionService {
  constructor(
    @InjectModel('PersonalQuestion')
    private personalQuestionModel: Model<PersonalQuestionDocument>
  ) {}

  async createQuestion(
    question: CreateQuestionDTO
  ): Promise<PersonalQuestionDocument> {
    const createdQuestion = new this.personalQuestionModel(question);
    return await createdQuestion.save();
  }
  async createQuestions(
    questions: CreateManyQuestionsDTO
  ): Promise<PersonalQuestionDocument[]> {
    const modifiedQuestions: PersonalQuestionMongo[] = [];
    for (const question of questions) {
      modifiedQuestions.push({
        ...question,
        _id: new Types.ObjectId(),
      });
    }
    const createdQuestions = await this.personalQuestionModel.insertMany(
      modifiedQuestions
    );
    return createdQuestions;
  }
}
