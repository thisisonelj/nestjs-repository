import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { emitterDtoClass } from './emitter.dto';
import { OrderCreatedEvent } from './event';

@Injectable()
export class OrdersService {
  constructor(private eventEmitter: EventEmitter2) {}

  create(emitterDTO: emitterDtoClass): OrderCreatedEvent {
    // const emitterDto = new emitterDtoClass();
    // emitterDto.id = 'QWEQEQWEQWEQWEQ';
    // emitterDto.num = 10000;
    // emitterDto.description = '该事件用于测试';
    // emitterDto.name = '测试事件';
    const orderCreatedEvent = new OrderCreatedEvent();
    orderCreatedEvent.name = emitterDTO.name;
    orderCreatedEvent.description = emitterDTO.description;
    this.eventEmitter.emit('order.created', orderCreatedEvent);

    return orderCreatedEvent;
  }
}
