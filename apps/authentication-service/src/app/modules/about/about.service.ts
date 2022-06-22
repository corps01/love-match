import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAboutDTO } from '@love-match/definitions';
import { Model, Types } from 'mongoose';
import { AboutDocument } from '../../models/about';
import { PersonalQuestionService } from '../personalQuestion/personalQuestion.service';

@Injectable()
export class AboutService {
  constructor(
    private personalQuestionService: PersonalQuestionService,
    @InjectModel('About') private aboutModel: Model<AboutDocument>
  ) {}

  async createAbout(about: CreateAboutDTO): Promise<AboutDocument> {
    const createdQuestion = await this.personalQuestionService.createQuestions(
      about.personal_questions
    );
    const createdAbout = await this.aboutModel.create({
      ...about,
      _id: new Types.ObjectId(),
      personal_questions: createdQuestion.map((question) => question._id),
    });

    return createdAbout;
  }
}
