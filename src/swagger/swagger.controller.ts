import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SwaggerService } from './swagger.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('testSwagger')
@Controller('/swagger')
export class SwaggerController {
  constructor(private readonly swaggerService: SwaggerService) {}

  /**
   * 记录当前Swagger文档
   */
  @ApiOperation({ summary: 'record current' })
  @ApiResponse({ status: 201, description: 'success' })
  @Get('/current')
  recordCurrentDocument(): string {
    return this.swaggerService.recordCurrentDocument();
  }
  /**
   *  获取当前Swagger文档
   */
  @ApiResponse({
    status: 200,
    description: 'success',
    type: Map,
  })
  @Post('/query')
  queryCurrentRecord(): Map<string, object> {
    return this.swaggerService.queryCurrentRecord();
  }
}
