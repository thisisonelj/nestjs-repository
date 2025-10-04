import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { httpService } from './http.service';
import { HttpController } from './http.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [httpService],
  controllers: [HttpController],
})
export class httpModule {}
