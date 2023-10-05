import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../app-modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://sebasstianrdz:lmAChpiCYKBHGSnc@cluster0.ex9srvb.mongodb.net/?retryWrites=true&w=majority'
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
