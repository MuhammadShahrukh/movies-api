const { PrismaClient } = require('@prisma/client');
const { Client } = require('@elastic/elasticsearch');
require('dotenv').config();
const { Users, Movies, Reviews, Mapping } = require('./seeders/index');
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

const seedUsers = () => {
  const userPromises = [];
  for (let { email, username, first_name, last_name, password } of Users) {
    userPromises.push(
      prisma.user.upsert({
        where: { email },
        update: {},
        create: {
          email,
          username,
          first_name,
          last_name,
          password,
        },
      }),
    );
  }
  return userPromises;
};

const seedMovies = async (users) => {
  let index = 0;
  for (let movie of Movies) {
    await prisma.movie.create({
      data: {
        ...movie,
        reviews: {
          create: {
            comment: Reviews[index].comment,
            rating: Reviews[index].rating,
            user_id: users[0].id,
          },
        },
      },
    });
    await elasticlient.index({
      index: process.env.ELASTICSEARCH_INDEX,
      id: index + 1,
      body: {
        ...movie,
      },
    });
    index++;
  }
};

async function main() {
  try {
    await createMapping();
    const users = await Promise.all(seedUsers());
    const movies = await seedMovies(users);

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
