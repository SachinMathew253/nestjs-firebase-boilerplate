import { Test, TestingModule } from '@nestjs/testing';
import { TradeIdeasController } from './trade-ideas.controller';

describe('TradeIdeasController', () => {
  let controller: TradeIdeasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TradeIdeasController],
    }).compile();

    controller = module.get<TradeIdeasController>(TradeIdeasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
