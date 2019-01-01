import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { QuotesService } from './quotes/quotes.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly quoteService: QuotesService,
  ) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @MessagePattern({ cmd: 'POSTS' })
  getPosts() {
    return this.quoteService.getQuotes();
  }
}
