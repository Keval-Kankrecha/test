// src/yuvak/yuvak.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Yuvak, YuvakDocument } from './yuvak.schema';

@Injectable()
export class YuvakService {
  constructor(@InjectModel(Yuvak.name) private yuvakModel: Model<YuvakDocument>) {}

  async create(createYuvakDto: { name: string; mobileNumber?: string; yuvakId: number }): Promise<Yuvak> {
    const createdYuvak = new this.yuvakModel(createYuvakDto);
    return createdYuvak.save();
  }

  async findAll(): Promise<Yuvak[]> {
    return this.yuvakModel.find().exec();
  }
}
