import { Injectable } from '@nestjs/common';

@Injectable()
export class SwaggerService {
  /**
   * 记录当前Swagger文档
   */

  recordCurrentDocument(): string {
    const responseText = '记录当前api信息';
    return responseText;
  }
  /**
   *  获取当前Swagger文档
   */

  queryCurrentRecord(): Map<string, object> {
    const responseMap = new Map();
    responseMap.set('title', { text: '这是Swagger标题' });
    responseMap.set('content', { content: '这是Swagger内容' });
    return responseMap;
  }
}
