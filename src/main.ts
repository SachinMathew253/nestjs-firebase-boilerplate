import * as firebaseAdmin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  firebaseAdmin.initializeApp({
    databaseURL: process.env.DATABASE_URL,
    credential: firebaseAdmin.credential.applicationDefault()
  })
  
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  app.enableCors();
  // app.use(express.json({ verify: this.rawBodySaver, limit: '50mb', }));
  // app.use(express.urlencoded({ verify: this.rawBodySaver, extended: true, limit: '50mb', }));
  // app.use(express.raw({ verify: this.rawBodySaver, type: '*/*', }));

  // console.log("🚀 ~ file: main.ts ~ line 22 ~ bootstrap ~ configService", configService)
  await app.listen(configService.get('PORT'));
}
bootstrap();
