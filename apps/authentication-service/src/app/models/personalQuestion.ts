import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PersonalQuestion } from '@love-match/definitions';
import { Document, Schema as SchemaMongoose, Types } from 'mongoose';

@Schema()
export class PersonalQuestionMongo implements PersonalQuestion {
  @Prop({
    type: SchemaMongoose.Types.ObjectId,
    default: new Types.ObjectId(),
  })
  _id: Types.ObjectId;
  @Prop({ type: String, required: true })
  question: string;
  @Prop({ type: String, required: true })
  answer: string;
}

export type PersonalQuestionDocument = PersonalQuestionMongo & Document;

export const PersonalQuestionSchema = SchemaFactory.createForClass(
  PersonalQuestionMongo
);
