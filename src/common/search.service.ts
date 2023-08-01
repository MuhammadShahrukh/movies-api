import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  private readonly INDEX = process.env.ELASTICSEARCH_INDEX;
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async index({ id, ...movie }) {
    try {
      console.log('');
      const result = this.elasticsearchService.index({
        index: this.INDEX,
        id: id,
        body: {
          ...movie,
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

  async search(searchTerm: string, genre?: string, country?: string) {
    try {
      const filters = [];

      if (genre) {
        filters.push({ term: { genre: genre } });
      }

      if (country) {
        filters.push({ term: { country: country } });
      }

      const result = await this.elasticsearchService.search({
        index: this.INDEX,
        body: {
          query: {
            bool: {
              must: {
                multi_match: {
                  query: searchTerm,
                  fields: ['name^3', 'description'],
                  fuzziness: 'AUTO',
                },
              },
              filter: filters,
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
  ) {
    try {
      const must = [];
      if (genre) {
        must.push({
          term: {
            'genre.keyword': genre,
          },
        });
      }
      if (country) {
        must.push({
          term: {
            'country.keyword': country,
          },
        });
      }
      if (rating) {
        must.push({
          range: {
            rating: {
              gte: rating,
            },
          },
        });
      }

      const result = await this.elasticsearchService.search({
        index: this.INDEX,
        from: (page - 1) * pageSize,
        size: pageSize,
        body: {
          query: {
            bool: {
              must: must,
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
