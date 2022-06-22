import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO, User } from '@love-match/definitions';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllusers(): User[] {
    return this.userService.getAllusers();
  }

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO): User {
    return this.userService.createUser(createUserDTO);
  }
}
