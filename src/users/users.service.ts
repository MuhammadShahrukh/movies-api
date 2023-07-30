import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  create(user) {
    return this.userRepository.create(user);
  }

  findUnique(id) {
    return this.userRepository.findUnique(id);
  }
}
