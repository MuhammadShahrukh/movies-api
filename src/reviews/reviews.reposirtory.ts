import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(review) {
    return this.prismaService.review.createMany({
      data: review,
    });
  }
}
