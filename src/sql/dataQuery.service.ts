import { Injectable } from '@nestjs/common';
import { dataQueryDo } from './dataQuery.do';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoodsInfo } from './dataQuery.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class DataQueryService {
  constructor(
    @InjectRepository(dataQueryDo)
    private readonly goodsRepository: Repository<dataQueryDo>,
  ) {}
  // 通过id查询单条记录
  findOne(id: string): Promise<dataQueryDo | null> {
    // 数据库sql操作
    return this.goodsRepository.findOneBy({ id: id });
  }

  // 查询所有
  async findAll(): Promise<Array<dataQueryDo>> {
    return this.goodsRepository.query('SELECT * FROM good');
  }

  // 删除单条记录
  async remove(id: string): Promise<void> {
    await this.goodsRepository.delete(id);
  }

  // 添加单条记录
  create(GoodsInfo: GoodsInfo): Promise<dataQueryDo> {
    const currentDataQueryDo = new dataQueryDo();
    const id = randomUUID();
    currentDataQueryDo.id = id;
    currentDataQueryDo.name = GoodsInfo.name;
    currentDataQueryDo.price = GoodsInfo.price;
    return this.goodsRepository.save(currentDataQueryDo);
  }
}
