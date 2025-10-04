import { Body, Controller, Post } from '@nestjs/common';
import { emitterDtoClass } from './emitter.dto';
import { OrdersService } from './emitter.service';

@Controller('/emitter')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('/test')
  create(@Body() emitterDTO: emitterDtoClass) {
    return this.ordersService.create(emitterDTO);
  }
}
