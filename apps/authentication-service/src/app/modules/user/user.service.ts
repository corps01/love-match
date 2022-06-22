import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CreateUserDTO,
  GetUserDTO,
  GetUsersDTO,
  LoginDTO,
} from '@love-match/definitions';
import { Model, Types } from 'mongoose';
import { UserDocument } from '../../models/user';
import { AboutService } from '../about/about.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<UserDocument>,
    private aboutService: AboutService
  ) {}

  async getUser(userFilter: GetUserDTO): Promise<UserDocument | undefined> {
    const user = await this.userModel
      .findOne({
        userFilter,
      })
      .populate({
        path: 'about',
        populate: { path: 'personal_questions', model: 'PersonalQuestion' },
      });

    return user;
  }

  async getAllusers(queryOptions: GetUsersDTO): Promise<UserDocument[]> {
    return await this.userModel
      .find()
      .limit(
        queryOptions.limit && queryOptions.limit > 0 && queryOptions.limit <= 10
          ? Math.round(queryOptions.limit)
          : 10
      )
      .skip(
        queryOptions.offset &&
          queryOptions.offset > 0 &&
          queryOptions.offset <= 10
          ? Math.round(queryOptions.offset)
          : 0
      );
  }

  async createUser(user: CreateUserDTO): Promise<UserDocument> {
    const createdAbout = await this.aboutService.createAbout(user.about);

    const createdUser = await this.userModel.create({
      ...user,
      about: createdAbout._id,
      _id: new Types.ObjectId(),
    });

    return createdUser;
  }

  async findUserByLogin(info: LoginDTO): Promise<UserDocument | undefined> {
    const user = await this.userModel.findOne({
      password: info.password,
      email: info.email,
    });

    return user;
  }
}
