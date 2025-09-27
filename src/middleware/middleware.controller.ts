import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ParseIntPipe } from './parse-int.pipe';
import { ValidationPipe } from './custom-validte.pipe';
import { CreateDataDto } from './createData.dto';
import { HttpExceptionFilter } from './http-exception.filter';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { LoggingInterceptor } from './logging.interceptor';
import { TransformInterceptor } from './transform.interceptor';
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

  /**
   * 测试守卫权限认证
   */
  @Post('/guard')
  @Roles(['admin'])
  @UseGuards(RolesGuard)
  testGuardInfo(@Body() obj: object): object {
    return obj;
  }

  /**
   * 测试拦截器AOP
   */
  @Post('/interceptor')
  @UseInterceptors(TransformInterceptor, LoggingInterceptor)
  testInterceptorInfo(@Body() obj: object): string {
    return '测试拦截器功能';
  }
}
