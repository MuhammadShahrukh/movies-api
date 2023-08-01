import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchService } from './search.service';

@Global()
@Module({
  providers: [PrismaService, SearchService],
  exports: [PrismaService, SearchService],
  imports: [
    ElasticsearchModule.register({
      node: process.env.ELASTICSEARCH_URL,
    }),
  ],
})
export class CommonModule {}
