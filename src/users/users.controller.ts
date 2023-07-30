import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthenticationGuard } from '../authentication/authentication.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() user) {
    return this.usersService.create(user);
  }

  @UseGuards(AuthenticationGuard)
  @Get(':id')
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findUnique(id);
  }
}
