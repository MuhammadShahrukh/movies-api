<h1 align="center">
  Movies API
</h1>

## Description

This application is a full-featured, review and search platform that combines the power of NestJS, Prisma, Elasticsearch, and MySQL/Postgres. It provides RESTful API endpoints for managing movie records, user authentication, and user interactions such as ratings and reviews.

## Features:

- Film Management: The application exposes RESTful APIs for managing film records. Each film has a variety of attributes such as name, description, release date, ticket price, country, genre, and photo.

- User Registration and Authentication: The application provides secure user registration and authentication.

- Movie Rating and Commenting: Authenticated users can rate movies on a scale of 1 to 5 and leave comments. The application ensures that only authenticated users can rate and comment on films.

- Real-time Data Syncing with Elasticsearch: The application syncs data in real-time from the SQL/NoSQL database to Elasticsearch on addition, updating, and deletion of films. This enables powerful search functionality and optimizes performance.

- Full-text Search and Filtering with Elasticsearch: Users can search for films by name or description, with an autocomplete feature for ease of use. The search functionality is robust, allowing for misspellings and ignoring common stop words. Users can also filter movies by various attributes like popularity, genre, country, and rating.

- Ranking and Scoring: The application provides a ranking or scoring mechanism for movies. It's flexible and customizable, enabling the boosting of movies from specific genres for instance.

- Modular Structure: The application is structured into different modules like User, Authentication, Movie, and Review for easy maintenance and scalability.

## Prerequisites

Create .env file which must have following env variables:

APPLICATION_PORT=3000
DATABASE_URL=""
ELASTICSEARCH_URL=""
ELASTICSEARCH_INDEX=""
MYSQL_ROOT_PASSWORD=""
MYSQL_DATABASE=""
JWT_SECRET=""

Docker is required to run the application, please install docker first.

## Running the app with Docker

```bash
# development
$ docker-compose up --build -d
```

It will start three containers i.e. Elasticsearch, MySQL, and API
You can play with the APIs now!!!!!!

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

### - /movies/search (GET)

Text search movies for given query parameters

```javascript
// Query Paramters

  "text": "movie name",
  "genre": "",              // optional
  "country": "",            // optional
  "boost_genre": "",        // optional

```

### - /movies (GET)

Fetch and return a list of all available movies for given query paramters

```javascript
// Query Paramters

  "page": 1,
  "pageSize": 10,           // optional
  "genre": "",              // optional
  "country": "",            // optional
  "boost_genre": "",        // optional

```

### - /movies/:id (GET)

Fetch and return a movie.

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

- Image upload functionality can be added in movie api, and save it cloud services (AWS S3, cloudinary, etc)
- Retry mechanism if elasticsearch goes down to main data consistency
- TypeScript types can be added
- Application can be containerzied using Docker
- Exception Handling can be improved
- Swagger can be added for api documentation
- Two factor authentication to make application more secure
- Unit test coverage can be added to cover upto 100% test
