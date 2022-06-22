/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const SYSTEMS_DOMAINS_WHITLIST = [
  process.env.AUTH_APP_URL,
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3334;

  // app.enableCors({
  //   origin: (origin, callback) => {
  //     if (origin && !SYSTEMS_DOMAINS_WHITLIST.includes(origin)) {
  //       callback(new Error('Not allowed by CORS'));
  //       return;
  //     }
  //     callback(null, true);
  //     return;
  //   },
  // });

  app.enableCors();

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
