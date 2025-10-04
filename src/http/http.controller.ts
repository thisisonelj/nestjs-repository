import { Body, Controller, Post } from '@nestjs/common';
import { httpService } from './http.service';

@Controller('/http')
export class HttpController {
  constructor(private httpService: httpService) {}

  @Post('/test')
  create() {
    return this.httpService.findAll();
  }
}
