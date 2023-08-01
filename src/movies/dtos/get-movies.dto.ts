import { IsOptional, IsInt, IsString, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetMoviesDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => (value ? parseInt(value, 10) : 1), {
    toClassOnly: true,
  })
  page: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => (value ? parseInt(value, 10) : 10), {
    toClassOnly: true,
  })
  pageSize: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  genre: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  boost_genre: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  country: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => (value ? parseInt(value, 10) : 5), {
    toClassOnly: true,
  })
  rating: number;
}
