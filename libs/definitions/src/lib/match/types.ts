import { Types } from 'mongoose';

export interface Match {
  _id: Types.ObjectId;
  date: Date;
  members: Types.ObjectId[];
}
