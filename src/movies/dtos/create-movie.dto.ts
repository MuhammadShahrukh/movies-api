import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsDateString()
  release_date: Date;

  @IsNumber()
  ticket_price: number;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsString()
  photo_url: string;

  @IsNotEmpty()
  @IsString()
  country: string;
}
