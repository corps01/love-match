import { LoginDTO } from '@love-match/definitions';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('login')
  login(@Body() loginDTO: LoginDTO){
    return this.authService.login(loginDTO);
  }
}
