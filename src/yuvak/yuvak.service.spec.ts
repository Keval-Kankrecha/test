import { Test, TestingModule } from '@nestjs/testing';
import { YuvakService } from './yuvak.service';

describe('YuvakService', () => {
  let service: YuvakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YuvakService],
    }).compile();

    service = module.get<YuvakService>(YuvakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
