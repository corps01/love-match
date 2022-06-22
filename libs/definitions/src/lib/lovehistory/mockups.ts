import { Types } from 'mongoose';
import { LoveHistory, PossibleInteraction } from './types';

export const mockLoveHistory: LoveHistory[] = [
  {
    date: new Date(),
    target_user: new Types.ObjectId(),
    result: PossibleInteraction.SUPER_YES,
  },
  {
    date: new Date(),
    target_user: new Types.ObjectId(),
    result: PossibleInteraction.YES,
  },
];
