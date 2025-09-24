import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DataQueryService } from './dataQuery.service';
import { dataQueryDo } from './dataQuery.do';

@Controller('/goods')
export class GoodsController {
  constructor(private readonly dataQueryService: DataQueryService) {}

  /**
   * 数据库查询单条记录
   */
  @Get('/one')
  queryOneRecord(): Promise<dataQueryDo | null> {
    const id = 'ADASDADASDASDADSADSADASD';
    return this.dataQueryService.findOne(id);
  }
  /**
   * 数据库查询所有
   */
  @Post('/all')
  queryListRecord(): Promise<Array<dataQueryDo>> {
    return this.dataQueryService.findAll();
  }
}
