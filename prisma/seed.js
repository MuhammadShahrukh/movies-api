const { PrismaClient } = require('@prisma/client');
const { Client } = require('@elastic/elasticsearch');
require('dotenv').config();
const { Users, Movies, Reviews } = require('./seeders/index');
const prisma = new PrismaClient();
const elasticlient = new Client({ node: process.env.ELASTICSEARCH_URL });

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
    const users = await Promise.all(seedUsers());
    const movies = await seedMovies(users);

    console.log(`Data Seeded`, movies);
  } catch (error) {
    console.log('Error in Seeding', error);
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
