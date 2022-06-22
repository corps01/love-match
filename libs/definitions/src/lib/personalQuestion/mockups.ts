import { Types } from 'mongoose';
import { PersonalQuestion } from './types';

export const mockPersonalQuestion: PersonalQuestion = {
  _id: new Types.ObjectId(),
  question: 'What is your favorite food?',
  answer: 'Hot-Dog',
};

export const mockPersonalQuestionsList: PersonalQuestion[] = [
  {
    _id: new Types.ObjectId(),
    question: 'What is your favorite food?',
    answer: 'Hot-Dog',
  },
  {
    _id: new Types.ObjectId(),
    question: 'What is your favorite movie?',
    answer: 'Joker',
  },
];
