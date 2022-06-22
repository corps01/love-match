import { Body, Controller, Post } from '@nestjs/common';
import { CreateAboutDTO } from '@love-match/definitions';
import { AboutDocument } from '../../models/about';

import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post()
  async createAbout(
    @Body() createAboutDTO: CreateAboutDTO
  ): Promise<AboutDocument> {
    return this.aboutService.createAbout(createAboutDTO);
  }
}
