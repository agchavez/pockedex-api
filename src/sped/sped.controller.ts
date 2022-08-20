import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpedService } from './sped.service';

@Controller('sped')
export class SpedController {
  constructor(private readonly spedService: SpedService) {}


  @Get()
  executeDta() {
    return this.spedService.loadData();
  }
}
