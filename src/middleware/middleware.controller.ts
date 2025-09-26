import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { ParseIntPipe } from './parse-int.pipe';
import { ValidationPipe } from './custom-validte.pipe';
import { CreateDataDto } from './createData.dto';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('/pipe')
export class MiddleWareController {
  /**
   * 测试管道验证
   */
  @Get(':id')
  testPipeDefault(@Param('id', new ParseIntPipe()) id): number {
    return id;
  }

  /**
   * 测试自定义管道验证
   */
  @Post('/custom')
  testPipeCustom(
    @Body(new ValidationPipe()) createDataDto: CreateDataDto,
  ): CreateDataDto {
    return createDataDto;
  }

  /**
   * 测试自定义异常
   */
  @Post('/exception')
  @UseFilters(HttpExceptionFilter)
  TestExceptionCustom(@Body() obj: object): object {
    return obj;
  }
}
