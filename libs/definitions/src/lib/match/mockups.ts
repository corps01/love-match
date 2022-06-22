import { Types } from 'mongoose';
import { Match } from './types';

export const mockMatchList: Match[] = [
  {
    _id: new Types.ObjectId(),
    date: new Date(),
    members: [new Types.ObjectId(), new Types.ObjectId()],
  },
  {
    _id: new Types.ObjectId(),
    date: new Date(),
    members: [new Types.ObjectId(), new Types.ObjectId()],
  },
];
