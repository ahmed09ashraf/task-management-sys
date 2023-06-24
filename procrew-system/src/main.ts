import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.use(cors({
  //   origin: 'http://localhost:8080', // Set your desired origin
  //   allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // }));

  app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:8080',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
