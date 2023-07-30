import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(user) {
    return this.prismaService.user.create({
      data: user,
    });
  }

  findUnique(id) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        username: true,
        first_name: true,
        last_name: true,
      },
    });
  }

  findByEmail(email, includePassowrd = false) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        username: true,
        first_name: true,
        last_name: true,
        password: includePassowrd,
      },
    });
  }
}
