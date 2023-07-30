import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { MoviesModule } from './movies/movies.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    UsersModule,
    AuthenticationModule,
    MoviesModule,
    CommonModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
