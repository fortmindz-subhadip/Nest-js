import { Test, TestingModule } from '@nestjs/testing';
import { TardingService } from './tarding.service';

describe('TardingService', () => {
  let service: TardingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TardingService],
    }).compile();

    service = module.get<TardingService>(TardingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
