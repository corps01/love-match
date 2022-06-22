import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO, GetUserDTO, GetUsersDTO } from '@love-match/definitions';
import { UserDocument } from '../../models/user';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getuser(@Body() getUserDTO: GetUserDTO): Promise<UserDocument> {
    return await this.userService.getUser(getUserDTO);
  }

  @Get('all')
  async getAllusers(@Body() getUsersDTO: GetUsersDTO): Promise<UserDocument[]> {
    return await this.userService.getAllusers(getUsersDTO);
  }

  @Post()
  async createUser(
    @Body() createUserDTO: CreateUserDTO
  ): Promise<UserDocument> {
    return this.userService.createUser(createUserDTO);
  }
}
