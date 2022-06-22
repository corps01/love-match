import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PersonalQuestionModule } from './modules/personalQuestion/personalQuestion.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.njzrt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    ),
    AuthModule,
    UserModule,
    PersonalQuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
