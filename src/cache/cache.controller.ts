import { HttpCacheInterceptor } from './common/http-cache.Interceptor';
import { Controller, Get, UseInterceptors } from '@nestjs/common';

@Controller('/cache')
@UseInterceptors(HttpCacheInterceptor)
export class CacheController {
  @Get('/')
  async testCache() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return '3秒后缓存生效';
  }
}
