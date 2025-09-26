import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    forceCloseConnections: true,
  });
  app.enableCors();
  app.enableShutdownHooks();
  app.set('query parser', 'extended');
  const options = new DocumentBuilder()
    .setTitle('接口api文档')
    .setDescription('The interface API description')
    .setVersion('1.0')
    .addTag('interfaceApi')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(9000);
}
bootstrap();
