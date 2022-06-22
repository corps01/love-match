import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDAO, LoginDTO } from '@love-match/definitions';
import { UserDocument } from '../../models/user';
import { Types } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(info: LoginDTO): Promise<UserDocument | undefined> {
    const user = await this.userService.findUserByLogin(info);
    return user;
  }

  async login(user: UserDocument): Promise<AuthDAO> {
    const payload = { user_id: user._id, email: user.email };

    return {
      jwt: this.jwtService.sign(payload, { algorithm: 'HS512' }),
    };
  }

  async getProfile(_id: string): Promise<UserDocument> {
    const user = await this.userService.getUser({
      _id: new Types.ObjectId(_id),
    });

    return user;
  }
}
