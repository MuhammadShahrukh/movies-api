FROM node:18.8.0-alpine

WORKDIR /app

ENV DATABASE_URL="mysql://root:test@db:3306/movies-directory?schema=public&connect_timeout=30"

COPY package*.json /app

RUN npm i

COPY . /app

RUN chmod +x wait-for-script.sh

# RUN npm run prisma:migrate && npm run prisma:seed

RUN npm run build