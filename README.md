## Description

Project Notification API create with Node.js:
- Framework: Nest.js,
- ORM: Prisma
- Bd: Mysql
- Test unit - (Jest)
- Desgin patterns
    - Mapper
    - Factory
    - DTO
- Documentation - Swagger API   

Software architecture:
- Ports & Adapters (Hexagonal Architecture)
    - Application 
        - Use cases
    - Infra
        - Http - (Controllers)
        - Database - (Orm - Prisma)
        - Dtos - (Validators)
        - Messaging - (Kafka)
    - Helpers
- Solid

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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


## Create migrations prisma

```bash
# migrations
$ npx prisma migrate dev
# studio
$ npx prisma studio
