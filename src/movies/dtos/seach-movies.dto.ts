import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class SearchMoviesDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  text: string;

  @Transform(({ value }) => value.toLowerCase())
  @IsOptional()
  @IsString()
  genre: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  country: string;
}
