import { Test, TestingModule } from '@nestjs/testing';
import { WebhooksModule } from '../modules/webhooks/webhooks.module';
import { WebhooksController } from './webhooks.controller';
import * as firebaseAdmin from 'firebase-admin';

describe('WebhooksController', () => {
  let controller: WebhooksController;

  beforeEach(async () => {
    firebaseAdmin.initializeApp({
      databaseURL: process.env.DATABASE_URL,
      credential: firebaseAdmin.credential.applicationDefault()
    })

    const module: TestingModule = await Test.createTestingModule({
      imports: [WebhooksModule],
    }).compile();

    controller = module.get<WebhooksController>(WebhooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
