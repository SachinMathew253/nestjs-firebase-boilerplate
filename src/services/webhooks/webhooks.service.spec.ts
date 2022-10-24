import { WebhooksModule } from '../../modules';
import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksController } from '../../webhooks/webhooks.controller';
import { WebhooksService } from './webhooks.service';
import { TradeIdeasRepositoryModule } from '../../modules/repositories/trade-ideas/trade-ideas.module';
import * as firebaseAdmin from 'firebase-admin';

describe('WebhooksService', () => {
  let service: WebhooksService;

  beforeEach(async () => {
    firebaseAdmin.initializeApp({
      databaseURL: process.env.DATABASE_URL,
      credential: firebaseAdmin.credential.applicationDefault()
    })

    const module: TestingModule = await Test.createTestingModule({
      imports: [TradeIdeasRepositoryModule],
      controllers: [WebhooksController],
      providers: [WebhooksService,],
      exports: [WebhooksService],
    }).compile();

    service = module.get<WebhooksService>(WebhooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
