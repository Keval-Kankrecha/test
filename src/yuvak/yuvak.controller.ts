// src/yuvak/yuvak.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { YuvakService } from './yuvak.service';
import { CreateYuvakDto } from './dto/create-yuvak.dto';
import { Yuvak } from './yuvak.schema';

@Controller('yuvak')
export class YuvakController {
  constructor(private readonly yuvakService: YuvakService) {}

  @Post()
  async create(@Body() createYuvakDto: CreateYuvakDto): Promise<Yuvak> {
    return this.yuvakService.create(createYuvakDto);
  }

  @Get()
  async findAll(): Promise<Yuvak[]> {
    return this.yuvakService.findAll();
  }
}
