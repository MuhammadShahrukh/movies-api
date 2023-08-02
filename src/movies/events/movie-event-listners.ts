// movie-event.listener.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { SearchService } from '../../common/search.service';
import {
  MovieCreatedEvent,
  MovieUpdatedEvent,
  MovieDeletedEvent,
} from './movie.events';

@Injectable()
export class MovieEventListener implements OnModuleInit {
  constructor(
    private readonly eventEmitter: EventEmitter2,
    private readonly searchService: SearchService,
  ) {}

  onModuleInit() {
    this.eventEmitter.onAny((event, ...args) => {
      console.log(`received event =`, event);
    });
  }

  @OnEvent('movie.created')
  async handleMovieCreatedEvent(event: MovieCreatedEvent) {
    await this.searchService.index(event.movie);
  }

  @OnEvent('movie.updated')
  async handleMovieUpdatedEvent(event: MovieUpdatedEvent) {
    await this.searchService.update(event.movie.id, event.movie);
  }

  @OnEvent('movie.deleted')
  async handleMovieDeletedEvent(event: MovieDeletedEvent) {
    await this.searchService.delete(event.id);
  }
}
