import { Injectable } from '@nestjs/common';
import { MoviesRepository } from './movies.repository';
import { SearchService } from 'src/common/search.service';
import { GetMoviesDto } from './dtos/get-movies.dto';
import { SearchMoviesDto } from './dtos/seach-movies.dto';

@Injectable()
export class MoviesService {
  constructor(
    private readonly movieRepository: MoviesRepository,
    private readonly searchService: SearchService,
  ) {}

  async create(movie) {
    const movieResult = await this.movieRepository.create(movie);
    await this.searchService.index(movieResult);
  }

  async update(id: number, movie) {
    await this.movieRepository.update(id, movie);
    await this.searchService.update(id, movie);
  }

  async delete(id: number) {
    await this.movieRepository.delete(id);
    await this.searchService.delete(id);
  }

  findUnique(id: number) {
    return this.movieRepository.findUnique(id);
  }

  get({ page, pageSize, genre, country, rating }: GetMoviesDto) {
    return this.searchService.get(page, pageSize, genre, country, rating);
  }

  search({ text, genre, country }: SearchMoviesDto) {
    return this.searchService.search(text, genre, country);
  }
}
