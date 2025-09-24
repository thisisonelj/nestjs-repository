import { Module } from '@nestjs/common';
import { GoodsController } from './dataQuery.controller';
import { DataQueryService } from './dataQuery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { dataQueryDo } from './dataQuery.do';
/**
 *  商品模块 模拟数据库CRUD
 */
@Module({
  imports: [TypeOrmModule.forFeature([dataQueryDo])],
  controllers: [GoodsController],
  providers: [DataQueryService],
})
export class DataQueryModule {
  constructor(private dataSource: DataSource) {}
}
