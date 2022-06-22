import { CreateQuestionDTO } from '../personalQuestion';
import { Horoscope } from './types';

export interface CreateAboutDTO {
  horoscope?: Horoscope;
  personal_questions?: CreateQuestionDTO[];
  description: string;
}
