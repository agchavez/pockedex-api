import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PockemonService } from './pockemon.service';
import { CreatePockemonDto } from './dto/create-pockemon.dto';
import { UpdatePockemonDto } from './dto/update-pockemon.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { PaginationDto } from '../common/dto/pagination.dto';
import { FilterPockemonDto } from './dto/filter-pockemon.dto';

@Controller('pockemon')
export class PockemonController {
  constructor(private readonly pockemonService: PockemonService) {}

  @Post()
  create(@Body() createPockemonDto: CreatePockemonDto) {
    return this.pockemonService.create(createPockemonDto);
  }

  @Get()
  findAll( 
    @Query() query: FilterPockemonDto
  ) {
    return this.pockemonService.findAll(
      query
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pockemonService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePockemonDto: UpdatePockemonDto) {
    return this.pockemonService.update(id, updatePockemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.pockemonService.remove(id);
  }
}
