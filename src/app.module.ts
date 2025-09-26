import { Module } from '@nestjs/common';
import { DataQueryModule } from './sql/dataQuery.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwaggerModule } from './swagger/swagger.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './schedule/schedule.module';
import { TestCacheModule } from './cache/cache.module';
import { SseModule } from './sse/sse.module';
import { MiddleWareModule } from './middleware/middleware.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'goods',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ScheduleModule.forRoot(),
    TasksModule,
    DataQueryModule,
    SwaggerModule,
    TestCacheModule,
    SseModule,
    MiddleWareModule,
  ],
})
export class AppModule {}
