import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesService } from './quotes/quotes.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
