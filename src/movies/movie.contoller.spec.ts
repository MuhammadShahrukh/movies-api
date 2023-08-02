import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ValidationPipe } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { SearchMoviesDto } from './dtos/seach-movies.dto';
import { GetMoviesDto } from './dtos/get-movies.dto';

const movie = {
  id: 1,
  name: 'Spider Man',
  description:
    'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.',
  release_date: '2023-07-30T13:19:35.012Z',
  ticket_price: 12,
  genre: 'Superhero',
  photo_url:
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTb-iTrAmE_x35oWfFcFpgMbFtuG59NXUUoiOn0jMp93POq5YDH',
  country: 'US',
  reviews: [
    {
      rating: 4,
      comment:
        'You can tell by the music with the slight hint of dread in it, and the wild, incredible animation, you know this is gonna be a wild ride. Its such an experience',
      user: {
        id: 1,
        email: 'shahrukh@hotmail.com',
      },
    },
    {
      rating: 1,
      comment: 'testing comment of review',
      user: {
        id: 1,
        email: 'shahrukh@hotmail.com',
      },
    },
  ],
};

const searchMovieDto: SearchMoviesDto = {
  text: 'test',
  genre: 'Action',
  country: 'US',
  boost_genre: 'Action',
};

describe('MoviesController', () => {
  let controller: MoviesController;
  const mockSearch = jest.fn();
  const mockGet = jest.fn();
  const mockCreate = jest.fn();
  const mockUpdate = jest.fn();
  const mockDelete = jest.fn();
  const mockFindUnique = jest.fn();

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [
        {
          provide: MoviesService,
          useValue: {
            search: mockSearch,
            get: mockGet,
            create: mockCreate,
            update: mockUpdate,
            delete: mockDelete,
            findUnique: mockFindUnique,
          },
        },
        JwtService,
      ],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should search for movies', async () => {
    mockSearch.mockResolvedValue(movie);
    const response = await controller.search(searchMovieDto);

    expect(response).toEqual(movie);
    expect(mockSearch).toHaveBeenCalled();
  });

  it('should throw an error if validation fails for SearchMoviesDto', async () => {
    const invalidData = {
      page: '',
    };

    const validationPipe = new ValidationPipe({
      transform: true,
    });

    try {
      await validationPipe.transform(invalidData, {
        type: 'query',
        metatype: SearchMoviesDto,
      });
    } catch (error) {
      expect(error.getResponse().message).toContain('text must be a string');
      expect(error.getResponse().message).toContain('text should not be empty');
    }
  });

  it('should throw an error if validation fails for GetMoviesDto', async () => {
    const invalidData = {
      page: '',
    };

    const validationPipe = new ValidationPipe({
      transform: true,
      whitelist: true,
    });

    try {
      await validationPipe.transform(invalidData, {
        type: 'query',
        metatype: GetMoviesDto,
      });
    } catch (error) {
      console.log('>>>>>>>>>>>>>>>>', error);
      expect(error.getResponse().message).toContain('text must be a string');
    }
  });
});
