import { Module } from '@nestjs/common';
import { CacheController } from './cache.controller';
import { CacheModule } from '@nestjs/cache-manager';
@Module({
  imports: [CacheModule.register()],
  controllers: [CacheController],
})
export class TestCacheModule {}
