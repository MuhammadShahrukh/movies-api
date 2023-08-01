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
import { SearchMoviesDto } from './dtos/seach-movies.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @UseGuards(AuthenticationGuard)
  @Get('/search')
  search(@Query() searchMovieDto: SearchMoviesDto) {
    return this.moviesService.search(searchMovieDto);
  }

  @UseGuards(AuthenticationGuard)
  @Get()
  get(@Query() getMovieDto: GetMoviesDto) {
    return this.moviesService.get(getMovieDto);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  async create(@Body() movie: CreateMovieDTO) {
    await this.moviesService.create(movie);
    return 'movie has been created successfully.';
  }

  @UseGuards(AuthenticationGuard)
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() movie) {
    await this.moviesService.update(id, movie);
    return 'movie has been updated successfully.';
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
