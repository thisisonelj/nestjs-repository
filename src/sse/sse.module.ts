import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SseController } from './sse.controller';
import { LoggerMiddleware } from '../middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [SseController],
  providers: [],
})
export class SseModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/sse/');
  }
}
