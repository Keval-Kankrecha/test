import { Test, TestingModule } from '@nestjs/testing';
import { YuvakController } from './yuvak.controller';

describe('YuvakController', () => {
  let controller: YuvakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YuvakController],
    }).compile();

    controller = module.get<YuvakController>(YuvakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
