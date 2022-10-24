import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WebhooksService } from '../../services';
import { PreauthMiddleware } from '../../firebase-auth/firebase.preauth.middleware';
import { WebhooksController } from '../../webhooks/webhooks.controller';
import webhookConfig from './webhook.config';
import { TradeIdeasRepositoryModule } from '../repositories/trade-ideas/trade-ideas.module';

@Module({
    imports: [TradeIdeasRepositoryModule],
    controllers: [WebhooksController],
    providers: [WebhooksService,],
    exports: [WebhooksService],
})
export class WebhooksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // consumer.apply(PreauthMiddleware).forRoutes({
        //     path: '*',
        //     method: RequestMethod.ALL
        // })
    }

}
