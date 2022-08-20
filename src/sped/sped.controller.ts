import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SpedService } from './sped.service';

@Controller('sped')
export class SpedController {
  constructor(private readonly spedService: SpedService) {}


  @Get()
  executeDta(
    @Query('limit') limit: number,
  ) {
    return this.spedService.loadData(
      limit
    );
  }
}
