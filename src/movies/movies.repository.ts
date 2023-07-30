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
    const movies = Array.isArray(movie) ? movie : [movie];
    return this.prismaService.movie.createMany({
      data: movies,
    });
  }

  update(movie) {
    return this.prismaService.movie.update({
      where: {
        id: movie.id,
      },
      data: movie,
    });
  }

  async delete(id) {
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

  findUnique(id) {
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
