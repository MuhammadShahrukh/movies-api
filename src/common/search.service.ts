import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  private readonly INDEX = process.env.ELASTICSEARCH_INDEX;
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async index({ id, genre, ...movie }) {
    try {
      const result = this.elasticsearchService.index({
        index: this.INDEX,
        id: id,
        body: {
          ...movie,
          genre: genre.split(',').map((g) => g.trim()),
        },
      });
      return result;
    } catch (error) {
      throw new HttpException(
        `Elasticsearch Exception: ${error.name}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async search(
    searchTerm: string,
    genre?: string,
    country?: string,
    boost_genre?: string,
  ) {
    try {
      const filters = [];

      if (genre) {
        filters.push({ term: { genre } });
      }

      if (country) {
        filters.push({ term: { country } });
      }

      const functions = [];
      if (boost_genre) {
        functions.push({
          filter: { match: { genre: boost_genre } },
          weight: 5,
        });
      }

      const result = await this.elasticsearchService.search({
        index: this.INDEX,
        body: {
          query: {
            function_score: {
              query: {
                bool: {
                  must: {
                    multi_match: {
                      query: searchTerm,
                      fields: ['name', 'description'],
                      fuzziness: 'AUTO',
                    },
                  },
                  filter: filters,
                },
              },
              functions: functions,
            },
          },
        },
      });

      return result.hits.hits;
    } catch (error) {
      throw new HttpException(
        `Elasticsearch Exception: ${error.name}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async get(
    page = 1,
    pageSize = 10,
    genre?: string,
    country?: string,
    rating?: number,
    boost_genre?,
  ) {
    try {
      const filter = [];
      if (genre) {
        filter.push({
          term: {
            genre,
          },
        });
      }
      if (country) {
        filter.push({
          term: {
            country,
          },
        });
      }
      if (rating) {
        filter.push({
          range: {
            rating: {
              gte: rating,
            },
          },
        });
      }

      const functions = [];

      if (boost_genre) {
        functions.push({
          filter: { match: { genre: boost_genre } },
          weight: 3,
        });
      }

      const result = await this.elasticsearchService.search({
        index: this.INDEX,
        from: (page - 1) * pageSize,
        size: pageSize,
        body: {
          query: {
            function_score: {
              query: {
                bool: {
                  filter: filter,
                },
              },
              functions: functions,
            },
          },
        },
      });
      return result.hits.hits;
    } catch (error) {
      throw new HttpException(
        `Elasticsearch Exception: ${error.name}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id, movie) {
    try {
      await this.elasticsearchService.update({
        index: this.INDEX,
        id,
        body: {
          doc: movie,
        },
      });
    } catch (error) {
      throw new HttpException(
        `Elasticsearch Exception: ${error.name}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete(id) {
    try {
      await this.elasticsearchService.delete({
        index: this.INDEX,
        id,
      });
    } catch (error) {
      throw new HttpException(
        `Elasticsearch Exception: ${error.name}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
