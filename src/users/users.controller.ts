import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user) {
    return this.usersService.create(user);
  }

  @Get(':id')
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findUnique(id);
  }
}
