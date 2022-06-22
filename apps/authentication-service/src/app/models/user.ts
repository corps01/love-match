import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender, Lookingfor, User } from '@love-match/definitions';
import { Document, Schema as SchemaMongoose, Types } from 'mongoose';
import { AboutDocument } from './about';
@Schema()
export class UserMongo implements User {
  @Prop({
    type: SchemaMongoose.Types.ObjectId,
    default: new Types.ObjectId(),
  })
  _id: Types.ObjectId;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false })
  last_name?: string;
  @Prop({ type: String, required: true })
  password: string;
  @Prop({ type: String, required: true, unique: true })
  email: string;
  @Prop({ type: String, required: false })
  city?: string;
  @Prop({ type: String, required: false })
  country?: string;
  @Prop({ type: String, required: true })
  phone: string;
  @Prop({ type: String, required: true })
  image_profile: string;
  @Prop({ type: [String], required: true })
  gallery: string[];
  @Prop({ type: Number, required: true })
  age: number;
  @Prop({ type: () => Gender, enum: Gender, required: true })
  gender: Gender;
  @Prop({ type: String, required: true })
  preference: string;
  @Prop({
    type: SchemaMongoose.Types.ObjectId,
    ref: 'About',
  })
  about: AboutDocument;
  @Prop({ type: () => Lookingfor, enum: Lookingfor, required: true })
  lookingfor: Lookingfor;
  @Prop({ required: false })
  verified?: boolean;
}

export type UserDocument = UserMongo & Document;

export const UserSchema = SchemaFactory.createForClass(UserMongo);
