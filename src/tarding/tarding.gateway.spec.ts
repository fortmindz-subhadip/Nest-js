import { Test, TestingModule } from '@nestjs/testing';
import { TardingGateway } from './tarding.gateway';
import { TardingService } from './tarding.service';

describe('TardingGateway', () => {
  let gateway: TardingGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TardingGateway, TardingService],
    }).compile();

    gateway = module.get<TardingGateway>(TardingGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
