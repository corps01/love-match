import { Injectable } from '@nestjs/common';
import { User, mockGeneralUser, CreateUserDTO } from '@love-match/definitions';

@Injectable()
export class UserService {
  getAllusers(): User[] {
    return [mockGeneralUser];
  }

  createUser(user: CreateUserDTO): User {
    return { image_profile: '', _id: '_id1', gallery: [''], ...user };
  }
}
