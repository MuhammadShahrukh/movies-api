import { Injectable } from '@nestjs/common';
import { ReviewsRepository } from './reviews.reposirtory';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewsRepository: ReviewsRepository) {}

  create(review) {
    return this.reviewsRepository.create(review);
  }
}
