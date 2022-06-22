import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { About, Horoscope } from '@love-match/definitions';
import { Document, Schema as SchemaMongoose, Types } from 'mongoose';
import { PersonalQuestionDocument } from './personalQuestion';

@Schema()
export class AboutMongo implements About {
  @Prop({
    type: SchemaMongoose.Types.ObjectId,
    default: new Types.ObjectId(),
  })
  _id: Types.ObjectId;
  @Prop({ type: () => Horoscope, enum: Horoscope, required: false })
  horoscope?: Horoscope;
  @Prop({
    type: () => [SchemaMongoose.Types.ObjectId],
    ref: 'PersonalQuestion',
    default: [],
  })
  personal_questions?: PersonalQuestionDocument[];
  @Prop({ type: String, required: true })
  description: string;
}

export type AboutDocument = AboutMongo & Document;

export const AboutSchema = SchemaFactory.createForClass(AboutMongo);
