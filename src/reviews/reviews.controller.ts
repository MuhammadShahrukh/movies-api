import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from 'src/authentication/authentication.guard';
import { ReviewsService } from './reviews.service';
import { ReviewDTO } from './dtos/review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() body: ReviewDTO) {
    return this.reviewsService.create(body);
  }
}
