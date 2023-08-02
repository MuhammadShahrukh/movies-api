import { Test, TestingModule } from '@nestjs/testing';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MoviesService } from './movies.service';
import { MoviesRepository } from './movies.repository';
import { SearchService } from '../common/search.service';
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

const getQueryParams: GetMoviesDto = {
  page: 1,
  pageSize: 10,
  genre: 'Action',
  country: 'United States',
  boost_genre: 'Comedy',
  rating: 1,
};

describe('MoviesService', () => {
  let service: MoviesService;
  const mockFindMany = jest.fn();
  const mockCreate = jest.fn();
  const mockUpdate = jest.fn();
  const mockDelete = jest.fn();
  const mockGet = jest.fn();
  const mockSearch = jest.fn();
  const mockFindUnique = jest.fn();
  const mockSearchServiceFind = jest.fn();
  const mockSearchServiceSearch = jest.fn();
  const mockEventEmitter = { emit: jest.fn() };

  beforeEach(async () => {
    jest.resetAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: MoviesRepository,
          useValue: {
            findMany: mockFindMany,
            create: mockCreate,
            update: mockUpdate,
            delete: mockDelete,
            search: mockSearch,
            findUnique: mockFindUnique,
          },
        },
        { provide: EventEmitter2, useValue: mockEventEmitter },
        {
          provide: SearchService,
          useValue: {
            get: mockSearchServiceFind,
            search: mockSearchServiceSearch,
          },
        },
      ],
    }).compile();
    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should delete movie', async () => {
    const result = await service.delete(movie.id);
    expect(result).toBeUndefined();
    expect(mockDelete).toHaveBeenCalledWith(movie.id);
    expect(mockEventEmitter.emit).toHaveBeenCalledWith(
      'movie.deleted',
      expect.anything(),
    );
  });

  it('should return unique movies', async () => {
    mockFindUnique.mockResolvedValueOnce(movie);
    const result = await service.findUnique(movie.id);
    expect(result).toEqual(movie);
    expect(mockFindUnique).toHaveBeenCalledWith(movie.id);
  });

  it('should create a movie', async () => {
    const result = await service.create(movie);
    expect(result).toBeUndefined();
    expect(mockCreate).toHaveBeenCalledWith(movie);
    expect(mockEventEmitter.emit).toHaveBeenCalledWith(
      'movie.created',
      expect.anything(),
    );
  });

  it('should update a movie', async () => {
    await service.update(movie.id, movie);

    expect(mockUpdate).toHaveBeenCalledWith(movie.id, movie);
    expect(mockEventEmitter.emit).toHaveBeenCalledWith(
      'movie.updated',
      expect.anything(),
    );
  });

  it('should get a movie', async () => {
    mockSearchServiceFind.mockResolvedValue(movie);
    const result = await service.get(getQueryParams);

    expect(mockSearchServiceFind).toHaveBeenCalled();
    expect(result).toStrictEqual(movie);
  });
});
