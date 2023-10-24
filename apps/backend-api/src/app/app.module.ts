import { Module, Post } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../app-modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from '@app-modules/notification/notification.module';
import { PostModule } from '@app-modules/post/post.module';
import { ChatModule } from '@app-modules/chat/chat.module';

@Module({
  imports: [
    UserModule,
    NotificationModule,
    PostModule,
    ChatModule,
    MongooseModule.forRoot(
      'mongodb+srv://sebasstianrdz:lmAChpiCYKBHGSnc@cluster0.ex9srvb.mongodb.net/?retryWrites=true&w=majority'
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
