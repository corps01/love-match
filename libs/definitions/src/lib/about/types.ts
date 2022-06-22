import { Types } from 'mongoose';
import { PersonalQuestion } from '../personalQuestion';

export enum Horoscope {
  ARIES = 'Aries',
  TAURUS = 'Taurus',
  GEMINI = 'Gemini',
  CANCER = 'Cancer',
  LEO = 'Leo',
  VIRGO = 'Virgo',
  LIBRA = 'Libra',
  SCORPIO = 'Scorpio',
  SAGITTARIUS = 'Sagittarius',
  CAPRICORN = 'Capricorn',
  AQUARIUS = 'Aquarius',
  PISCES = 'Pisces',
}

export interface About {
  _id: Types.ObjectId;
  horoscope?: Horoscope;
  personal_questions?: PersonalQuestion[];
  description: string;
}
