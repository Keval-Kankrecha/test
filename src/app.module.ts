import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YuvakModule } from './yuvak/yuvak.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://keval-kankrecha:Cq7aYc0XEJAkEO8@baps-attendance.hizdu.mongodb.net/baps-attendance'),YuvakModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
