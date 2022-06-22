import { Injectable } from '@nestjs/common';
import { definitions } from '@love-match/definitions';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to backend!' + ' ' + definitions() };
  }
}
