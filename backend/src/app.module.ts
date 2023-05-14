import { Module } from '@nestjs/common';
import { NewsModule } from './modules/news/news.module';

@Module({
  imports: [NewsModule],
  controllers: [],
  providers: []
})

export class AppModule {}
