import { Injectable } from '@nestjs/common';
import { MoviesRepository } from './movies.repository';

@Injectable()
export class MoviesService {
  constructor(private readonly movieRepository: MoviesRepository) {}

  findMany() {
    return this.movieRepository.findMany();
  }

  create(movie) {
    return this.movieRepository.create(movie);
  }

  update(movie) {
    return this.movieRepository.update(movie);
  }

  delete(id) {
    return this.movieRepository.delete(id);
  }

  findUnique(id) {
    return this.movieRepository.findUnique(id);
  }
}
