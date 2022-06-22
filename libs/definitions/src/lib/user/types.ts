import { Types } from 'mongoose';
import { About } from '../about';

export enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
  OTHER = 'Other',
}

export enum Lookingfor {
  FRIENDSHIP = 'Friendship',
  NOTHING = 'Nothing',
  LONG_RELATIONSHIP = 'Long relationship',
  CASUAL = 'Casual',
}

export interface User {
  _id: Types.ObjectId;
  name: string;
  last_name?: string;
  password: string;
  email: string;
  city?: string;
  country?: string;
  phone: string;
  image_profile: string;
  gallery: string[];
  age: number;
  gender: Gender;
  preference: string;
  about: About;
  lookingfor: Lookingfor;
  verified?: boolean;
}

export interface UserPreview {
  _id: Types.ObjectId;
  name: string;
  last_name?: string;
  city?: string;
  country?: string;
  phone: string;
  image_profile: string;
  gallery: string[];
  age: number;
  gender: Gender;
  preference: string;
  about: About;
}
