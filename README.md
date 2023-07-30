<h1 align="center">
  Movies API
</h1>

## Description

This repository contains movies-api code where you can add, update and delete movies.

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

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## NOTE

After Installing mysql image, Allow the MySQL root user to connect from any host,
So your prisma will easily connect with mysql root user. Also create table

```bash
docker exec -it  mysql-node-sample mysql -p

UPDATE mysql.user SET Host='%' WHERE User='root';
FLUSH PRIVILEGES;
CREATE DATABASE `movies-directory`;
```

## Improvements

- swagger can be added for api documentation
- two factor authentication to make application more secure
- unit test coverage can be added to cover upto 100% test
