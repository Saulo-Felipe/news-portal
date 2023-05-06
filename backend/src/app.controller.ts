import { Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';


/**
 * controllers são resposáveis por lidar com as solicitações e retornar resposta ao cliente
 */

@Controller("cats")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): object {
    return ["all cats here"];
  }

  @Post()
  create(): string {
    return "Cat created";
  }
}