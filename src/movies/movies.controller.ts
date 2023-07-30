import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { MoviesService } from './movies.service';
import { AuthenticationGuard } from '../authentication/authentication.guard';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(AuthenticationGuard)
  @Get()
  findMany() {
    return this.moviesService.findMany();
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() movie) {
    return this.moviesService.create(movie);
  }

  @UseGuards(AuthenticationGuard)
  @Put()
  update(@Body() movie) {
    return this.moviesService.update(movie);
  }

  @UseGuards(AuthenticationGuard)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.moviesService.delete(id);
    return `movie ${id} has been deleted successfully`;
  }

  @UseGuards(AuthenticationGuard)
  @Get(':id')
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.findUnique(id);
  }
}
