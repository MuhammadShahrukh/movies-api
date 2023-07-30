const { PrismaClient } = require('@prisma/client');
const { Users, Movies, Reviews } = require('./seeders/index');
const prisma = new PrismaClient();

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

const seedMovies = (users) => {
  const moviePromises = [];
  let index = 0;
  for (let {
    name,
    description,
    release_date,
    ticket_price,
    genre,
    photo_url,
    country,
  } of Movies) {
    moviePromises.push(
      prisma.movie.create({
        data: {
          name,
          description,
          release_date,
          ticket_price,
          genre,
          photo_url,
          country,
          reviews: {
            create: {
              comment: Reviews[index].comment,
              rating: Reviews[index].rating,
              user_id: users[0].id,
            },
          },
        },
      }),
    );
    index++;
  }
  return moviePromises;
};

async function main() {
  const users = await Promise.all(seedUsers());
  const movies = await Promise.all(seedMovies(users));

  console.log(`Users Seeded`, users);
  console.log(`Movies Seeded`, movies);
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
