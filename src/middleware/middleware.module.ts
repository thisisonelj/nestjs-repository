import { Module } from '@nestjs/common';
import { MiddleWareController } from './middleware.controller';

/**
 *  中间件测试 Module
 */
@Module({
  imports: [],
  controllers: [MiddleWareController],
  providers: [],
})
export class MiddleWareModule {}
