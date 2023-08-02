import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MoviesRepository } from './movies.repository';
import { SearchService } from '../common/search.service';
import { GetMoviesDto } from './dtos/get-movies.dto';
import { SearchMoviesDto } from './dtos/seach-movies.dto';
import {
  MovieCreatedEvent,
  MovieDeletedEvent,
  MovieUpdatedEvent,
} from './events/movie.events';

@Injectable()
export class MoviesService {
  constructor(
    private eventEmitter: EventEmitter2,
    private readonly movieRepository: MoviesRepository,
    private readonly searchService: SearchService,
  ) {}

  async create(movie) {
    const movieResult = await this.movieRepository.create(movie);
    this.eventEmitter.emit('movie.created', new MovieCreatedEvent(movieResult));
  }

  async update(id: number, movie) {
    await this.movieRepository.update(id, movie);
    this.eventEmitter.emit(
      'movie.updated',
      new MovieUpdatedEvent({ id, ...movie }),
    );
  }

  async delete(id: number) {
    await this.movieRepository.delete(id);
    this.eventEmitter.emit('movie.deleted', new MovieDeletedEvent(id));
  }

  findUnique(id: number) {
    return this.movieRepository.findUnique(id);
  }

  get({ page, pageSize, genre, country, rating, boost_genre }: GetMoviesDto) {
    return this.searchService.get(
      page,
      pageSize,
      genre,
      country,
      rating,
      boost_genre,
    );
  }

  search({ text, genre, country, boost_genre }: SearchMoviesDto) {
    return this.searchService.search(text, genre, country, boost_genre);
  }
}
