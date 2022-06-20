import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.njzrt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority` ),
    AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
