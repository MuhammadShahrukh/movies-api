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
  Query,
} from '@nestjs/common';

import { MoviesService } from './movies.service';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { CreateMovieDTO } from './dtos/create-movie.dto';
import { GetMoviesDto } from './dtos/get-movies.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(AuthenticationGuard)
  @Get('/search')
  async search(@Query('text') text: string) {
    return this.moviesService.search(text);
  }

  @UseGuards(AuthenticationGuard)
  @Get()
  get(@Query() getMovieDto: GetMoviesDto) {
    return this.moviesService.get(getMovieDto);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() movie: CreateMovieDTO) {
    return this.moviesService.create(movie);
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() movie) {
    return this.moviesService.update(id, movie);
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
