import { Types } from 'mongoose';

export interface Chat {
  _id: Types.ObjectId;
  members: Types.ObjectId[];
  messages: Message[];
  allow: {
    images: boolean;
    audios: boolean;
  };
}

export interface ChatPreview {
  receiver: string;
  image_profile: string;
  last_message: string;
  date: Date;
}

export interface Message {
  date: Date;
  content: string;
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
}
