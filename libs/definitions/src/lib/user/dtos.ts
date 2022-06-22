import { Types } from 'mongoose';
import { CreateAboutDTO } from '../about';
import { Gender, Lookingfor } from './types';

export class LoginDTO {
  email: string;
  password: string;
}

export interface CreateUserDTO {
  name: string;
  last_name?: string;
  password: string;
  email: string;
  city?: string;
  country?: string;
  phone: string;
  age: number;
  gender: Gender;
  preference: string;
  about: CreateAboutDTO;
  lookingfor: Lookingfor;
  verified: boolean;
}

export interface GetUserDTO {
  _id?: Types.ObjectId;
  name?: string;
  last_name?: string;
  email?: string;
}

export interface GetUsersDTO {
  limit?: number;
  offset?: number;
}
