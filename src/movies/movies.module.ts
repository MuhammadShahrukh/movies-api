import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MoviesRepository } from './movies.repository';
import { MovieEventListener } from './events/movie-event-listners';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository, MovieEventListener],
})
export class MoviesModule {}
