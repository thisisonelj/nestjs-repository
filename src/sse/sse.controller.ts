import { Controller, Get, MessageEvent, Res, Sse } from '@nestjs/common';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('/sse')
export class SseController {
  @Sse('/')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((_) => ({ data: { hello: 'world' } }) as MessageEvent),
    );
  }
}
