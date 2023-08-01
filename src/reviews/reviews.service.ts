import { Injectable } from '@nestjs/common';
import { ReviewsRepository } from './reviews.reposirtory';
import { SearchService } from 'src/common/search.service';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewsRepository: ReviewsRepository,
    private readonly searchService: SearchService,
  ) {}

  async create(review) {
    const { movie_id, rating } = await this.reviewsRepository.create(review);
    await this.searchService.update(movie_id, { rating });
  }
}
