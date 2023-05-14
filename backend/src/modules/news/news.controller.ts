import { Body, Controller, Get, Post } from "@nestjs/common";
import { NewsService } from "./news.service";
import { NewsDTO } from "./news.dto";


@Controller("news")
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async create(@Body() data: NewsDTO) {
    return await this.newsService.create(data);
  }

  @Get()
  async findAll() {
    return await this.newsService.findAll();
  }
}

