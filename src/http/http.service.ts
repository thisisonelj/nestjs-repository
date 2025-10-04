import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import OpenAI from 'openai';
@Injectable()
export class httpService {
  private readonly logger = new Logger(httpService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<any> {
    console.log(process.env.DEEPSEEK_APIKEY);
    const openai = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: process.env.DEEPSEEK_APIKEY,
    });
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
      model: 'deepseek-chat',
    });
    console.log(completion.choices[0].message.content);

    return completion;
  }
}
