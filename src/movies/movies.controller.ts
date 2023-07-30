import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  findMany() {
    return this.moviesService.findMany();
  }

  @Post()
  create(@Body() movie) {
    return this.moviesService.create(movie);
  }

  @Put()
  update(@Body() movie) {
    return this.moviesService.update(movie);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.delete(id);
  }

  @Get(':id')
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.findUnique(id);
  }
}
