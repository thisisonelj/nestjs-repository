import { Module } from '@nestjs/common';
import { TasksService } from './schedule.service';

@Module({
  providers: [TasksService],
})
export class TasksModule {}
