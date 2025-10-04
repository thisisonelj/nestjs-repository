import { Module } from '@nestjs/common';
import { OrderCreatedListener } from './listerer';
import { OrdersController } from './emitter.controller';
import { OrdersService } from './emitter.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrderCreatedListener],
})
export class OrdersModule {}
