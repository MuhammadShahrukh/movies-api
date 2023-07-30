<h1 align="center">
  Movies API
</h1>

## Description

This application is a full-featured, review and search platform that combines the power of NestJS, Prisma, Elasticsearch, and MySQL/Postgres. It provides RESTful API endpoints for managing movie records, user authentication, and user interactions such as ratings and reviews.

## Features:

- Film Management: The application exposes RESTful APIs for managing film records. Each film has a variety of attributes such as name, description, release date, ticket price, country, genre, and photo.

- User Registration and Authentication: The application provides secure user registration and authentication. User data is stored in MySQL/Postgres database and passwords are hashed for security.

- Movie Rating and Commenting: Authenticated users can rate movies on a scale of 1 to 5 and leave comments. The application ensures that only authenticated users can rate and comment on films.

- Real-time Data Syncing with Elasticsearch: The application syncs data in real-time from the SQL/NoSQL database to Elasticsearch on addition, updating, and deletion of films. This enables powerful search functionality and optimizes performance. **(PENDING)**

- Full-text Search and Filtering with Elasticsearch: Users can search for films by name or description, with an autocomplete feature for ease of use. The search functionality is robust, allowing for misspellings and ignoring common stop words. Users can also filter movies by various attributes like popularity, genre, country, and rating. **(PENDING)**

- Ranking and Scoring: The application provides a ranking or scoring mechanism for films. It's flexible and customizable, enabling the boosting of films from specific genres or directors, for instance. **(PENDING)**

- Modular Structure: The application is structured into different modules like User, Authentication, Movie, and Review for easy maintenance and scalability.

## Prerequisites

This application uses MySQL as its database, which will run inside a Docker container.

- Pull and run the MySQL Docker image. Open a terminal and run the following command to pull the latest MySQL Docker image and start a new container:

```bash
# Replace yourpassword with a password of your choice. This will be the password for the MySQL root user.
docker run --name mysql-node-sample -p 3306:3306 -e MYSQL_ROOT_PASSWORD=yourpassword -d mysql:latest
```

- Allow the MySQL root user to connect from any host. This step is necessary to allow the Prisma service to connect to the MySQL database as the root user.

```bash
# To run below commands, do this first, enter the MySQL shell by running:
docker exec -it mysql-node-sample mysql -p

# After connecting to mysql shell
UPDATE mysql.user SET Host='%' WHERE User='root';
FLUSH PRIVILEGES;
CREATE DATABASE `movies-directory`;

#Exit the MySQL shell by typing exit and hitting Enter. You've now set up the MySQL database and it's ready for the application to use.
```

## Installation

```bash

#run following commands in sequence before running the app:

$ npm install

$ npm run prisma:migrate

$ npm run prisma:seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test
```

## APIS

### - /authentication/signin (POST)

Authenticate an existing user and return an access token.

```json
// payload
{
  "email": "",
  "password": ""
}
```

### - /authentication/signup (POST)

Register a new user with the given details.

```json
// payload
{
  "email": "",
  "password": "",
  "username": "",
  "first_name": "",
  "last_name": ""
}
```

### - /movies/:id (GET)

Fetch and return a movie.

### - /movies (GET)

Fetch and return a list of all available movies.

### - /movies (POST)

Create movies record with the given details.

```json
// payload
{
  "name": "Titanic",
  "description": "A romantic drama about a ship that hits an iceberg",
  "release_date": "2023-07-30T20:42:06.355Z",
  "ticket_price": 8.5,
  "country": "USA",
  "genre": "Drama",
  "photo": "https://example.com/titanic.jpg"
}
```

### - /movies (PUT)

```json
// payload
{
  "id": 1,
  "name": "Titanic",
  "description": "A romantic drama about a ship that hits an iceberg",
  "release_date": "2023-07-30T20:42:06.355Z",
  "ticket_price": 8.5,
  "country": "USA",
  "genre": "Drama",
  "photo": "https://example.com/titanic.jpg"
}
```

Update an existing movie record with the given details.

### - /movies/:id (DELETE)

Remove an existing movie and related review record from the database.

### - /Review (POST)

Submit a new review for a specific movie by an authenticated user.

```json
// payload
{
  "rating": 1,
  "comment": "A romantic drama about a ship that hits an iceberg",
  "user_id": 2,
  "movie_id": 1
}
```

## Improvements

- image upload functionality can be added in movie api, and save it cloud services (AWS S3, cloudinary, etc)
- pagination can be added in search apis
- TypeScript types can be added
- Application can be containerzied using Docker
- Exception Handling can be improved
- swagger can be added for api documentation
- two factor authentication to make application more secure
- unit test coverage can be added to cover upto 100% test
