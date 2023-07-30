import { IsNotEmpty, IsNumber } from 'class-validator';

export class ReviewDTO {
  rating: string;

  @IsNotEmpty()
  comment: string;

  @IsNumber()
  user_id: number;

  @IsNumber()
  movie_id: number;
}
