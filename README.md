## Description

The purpose of the application is to demonstrate the knowledge in NodeJS/NestJS, React/NextJS and skills of Hexagonal Architecture.

## Backend description

Under the backend/src folder you can find the following folders:

- **core** - contains the core business logic of the application
  - **domain** - contains the domain entities and business logic
    - **entities** - contains the domain entities (Exercise, User)
    - **ports** - contains the inbound and outbound interfaces for the repositories
    - **services** - contains the services that are implementing the ports and tests.
  - **application** - contains the application interface and service.
    - **services** - contains the application services and tests.
  - **shared** - contains the shared code as DTOs.
- **infrastructure** - contains the implementation of the repositories and services
  - **repositories** - contains the implementation of the repositories
  - **services** - contains the implementation of the services

PostgreSQL is used as a database. The database is running in a docker container.

## Installation

```bash
$ cd backend && npm install
```

```bash
$ cd frontend && npm install
```

## Running the app

```bash
# postgres database
$ docker-compose up -d
```

```bash
# backend
$ npm run start
```

```bash
# frontentd
$ npm run dev
```

## Testing the app

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Twitter - [@antonov](https://twitter.com/antonov)
