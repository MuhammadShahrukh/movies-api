const { PrismaClient } = require('@prisma/client');
const { Client } = require('@elastic/elasticsearch');
require('dotenv').config();
const { Movies, Mapping } = require('./seeders/index');
const prisma = new PrismaClient();
const elasticlient = new Client({ node: process.env.ELASTICSEARCH_URL });

const createMapping = async () => {
  const exists = await elasticlient.indices.exists({
    index: process.env.ELASTICSEARCH_INDEX,
  });
  if (!exists) {
    await elasticlient.indices.create(Mapping);
    console.log('Elastic Mapping Created!');
  } else {
    console.log('Elastic Mapping Existed Already!');
  }
};

const seedMovies = async () => {
  for (let movie of Movies) {
    let result = await prisma.movie.upsert({
      where: {
        id: movie.id,
      },
      update: movie,
      create: movie,
    });
    await elasticlient.index({
      index: process.env.ELASTICSEARCH_INDEX,
      id: result.id,
      body: {
        ...movie,
      },
    });
  }
};

async function main() {
  try {
    await createMapping();
    await seedMovies();
    console.log(`Data Seeded Successfully!`);
  } catch (error) {
    console.log('Error in Seeding!', error);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
