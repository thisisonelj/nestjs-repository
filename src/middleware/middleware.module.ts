import { Module } from '@nestjs/common';
import { MiddleWareController } from './middleware.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.interceptor';
import { TransformInterceptor } from './transform.interceptor';

/**
 *  中间件测试 Module
 */
@Module({
  imports: [],
  controllers: [MiddleWareController],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class MiddleWareModule {}
