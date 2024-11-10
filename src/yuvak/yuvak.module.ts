// src/yuvak/yuvak.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { YuvakService } from './yuvak.service';
import { YuvakController } from './yuvak.controller';
import { Yuvak, YuvakSchema } from './yuvak.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Yuvak.name, schema: YuvakSchema }]),
  ],
  controllers: [YuvakController],
  providers: [YuvakService],
})
export class YuvakModule {}
