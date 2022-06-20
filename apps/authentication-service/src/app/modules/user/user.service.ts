import { Injectable } from '@nestjs/common';
import {
  User,
  mockGeneralUser,
  CreateUserDTO,
  LoginDTO,
  mockGeneralUserList,
} from '@love-match/definitions';

@Injectable()
export class UserService {
  getAllusers(): User[] {
    return [mockGeneralUser];
  }

  createUser(user: CreateUserDTO): User {
    return { image_profile: '', _id: '_id1', gallery: [''], ...user };
  }

  findUser(info: LoginDTO): User | undefined {
    const user = mockGeneralUserList.find(
      (mockUser) =>
        mockUser.email == info.email && mockUser.password == info.password
    );

    return user;

  }
}
