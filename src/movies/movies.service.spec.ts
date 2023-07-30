import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { MoviesRepository } from './movies.repository';

const movies = [
  {
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
  },
  {
    id: 2,
    name: 'The witcher',
    description:
      'The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.',
    release_date: '2023-07-30T13:19:35.012Z',
    ticket_price: 20,
    genre: 'Fantasy',
    photo_url:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZkkt9ZesujIficGP_RjI-iH0n-CXUpzXq0jgLtpklKheIVf09',
    country: 'US',
    reviews: [
      {
        rating: 4,
        comment:
          'It is not easy to become the number one trending series globally going into the second season of a convoluted, multi-faceted fantasy storyline, but Witchers showrunner Lauren Schmidt Hissrich has managed to sustain and surpass the momentum of a fabulous inaugural season. Henry Cavill returns as the beleaguered, battle-hardened Witcher-Geralt of Rivia, a biogenetically engineered warrior forever tasked with hunting down this magical realms numerous monsters.',
        user: {
          id: 1,
          email: 'shahrukh@hotmail.com',
        },
      },
    ],
  },
];

describe('MoviesService', () => {
  let service: MoviesService;
  const mockFindMany = jest.fn();
  const mockCreate = jest.fn();
  const mockUpdate = jest.fn();
  const mockDelete = jest.fn();
  const mockFindUnique = jest.fn();

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
            findUnique: mockFindUnique,
          },
        },
      ],
    }).compile();
    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all movies', async () => {
    mockFindMany.mockResolvedValueOnce(movies);
    const result = await service.findMany();
    expect(result).toEqual(movies);
    expect(mockFindMany).toHaveBeenCalled();
  });

  it('should create movies', async () => {
    mockCreate.mockResolvedValueOnce({ count: 2 });
    const result = await service.create(movies);
    expect(result).toEqual({ count: 2 });
    expect(mockCreate).toHaveBeenCalled();
  });
});
