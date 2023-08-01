import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class MoviesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany() {
    return this.prismaService.movie.findMany({
      include: {
        reviews: {
          select: {
            rating: true,
            comment: true,
            user: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  create(movie) {
    return this.prismaService.movie.create({
      data: movie,
    });
  }

  update(id: number, movie) {
    return this.prismaService.movie.update({
      where: {
        id,
      },
      data: movie,
    });
  }

  async delete(id: number) {
    await this.prismaService.review.deleteMany({
      where: {
        movie_id: id,
      },
    });

    await this.prismaService.movie.delete({
      where: {
        id,
      },
    });
  }

  findUnique(id: number) {
    return this.prismaService.movie.findUnique({
      where: {
        id,
      },
      include: {
        reviews: {
          select: {
            rating: true,
            comment: true,
            user: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }
}
