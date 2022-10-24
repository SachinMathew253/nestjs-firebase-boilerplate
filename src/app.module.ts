import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WebhooksModule } from '@modules';
import * as firebaseAdmin from 'firebase-admin';
import { FirestoreModule } from './firestore/firestore.module';
import { TradeIdeasController } from './api/trade-ideas/trade-ideas.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WebhooksModule,
    // FirestoreModule.forRoot({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     databaseURL: configService.get('DATABASE_URL'),
    //     credential: firebaseAdmin.credential.applicationDefault()
    //   }),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [AppController, TradeIdeasController,],
  providers: [AppService,],
})
export class AppModule {}
