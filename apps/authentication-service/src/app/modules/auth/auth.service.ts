import { AuthDAO, LoginDTO } from '@love-match/definitions';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  login(info: LoginDTO): AuthDAO {
    const user = this.userService.findUser(info);

    const payload = {user_id: user._id, email: user.email};

    return {
      jwt: this.jwtService.sign(payload)
     };
  }
}
