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
  pageSize?: number;

  @IsOptional()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => (value ? parseInt(value, 10) : 5), {
    toClassOnly: true,
  })
  rating?: number;
}
