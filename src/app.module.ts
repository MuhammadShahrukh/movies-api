import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [UsersModule, AuthenticationModule, MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
