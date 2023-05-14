import { Injectable } from "@nestjs/common";
import { NewsDTO } from "./news.dto";
import { PrismaService } from "src/database/prisma.service";


@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async create(data: NewsDTO) {
    const news = await this.prisma.news.create({ data });

    return news;
  }


  async findAll() {
    const data = await this.prisma.news.findMany();

    return data;
  }

}