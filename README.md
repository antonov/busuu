## Description

The purpose of the application is to demonstrate the knowledge in NodeJS/NestJS, React/NextJS and skills of Hexagonal Architecture and Typescript.

![Demo Busuu App](path/to/your/gif.gif)

## Backend description

I followed the hexagonal architecture principles for the backend with implementation of NestJS framework.

Under the backend/src folder you can find the following folders:

1. **core**
 **domain**: This directory contains the core business logic of my application. It's separated from the framework, the UI, and the database. Inside this directory, I have:
   - **entities**: These are the main objects of the application. They encapsulate the most important business rules. They are the smallest, simplest objects in the system.
   - **ports**: These are interfaces that allow the domain layer to interact with other layers without depending on them. This keeps the domain layer clean and isolated.
   - **services**: These are classes that contain domain operations that don't naturally belong to an entity. They implement the interfaces defined in the ports directory.
2. **application**: This directory contains the application-specific business logic. It's responsible for orchestrating the domain objects to perform tasks for the application. Inside this directory, I have:
   - **services**: These are classes that coordinate tasks and delegate work to collaborations of domain objects and infrastructural services.

3. **shared**: This directory contains code that is shared across multiple parts of the application, such as Data Transfer Objects (DTOs). DTOs are objects that carry data between processes, between the application and domain layers.

4. **infrastructure**: This directory contains all the code that interacts with specific technologies like databases and web services. Inside this directory, I have:
   - **adapters**: These are implementations of the repository interfaces defined in the domain layer. They provide a way to retrieve and store domain entities.
   - **exercises_db**: Contains the configuration of the database and entities describing the database tables for TypeORM.
   - **http_server**: These are the implementation of the controllers, API doc configuration and REST endpoints descriptions.

### Database

PostgreSQL is used as a database. The database is running in a docker container.
The initial seeding of the database is performed automatically on container deployment.

## Frontend description

NextJS was used to create a frontend APP. TailwindCSS is used for styling of the components.  Zustand for the state management of the modal window. Some components from shadcn as well such as Dialog component for the modal window.


## Installation

```bash
# postgres database
$ docker-compose up -d
```

```bash
# backend
$ cd backend && npm install
```

```bash
# frontend
$ cd frontend && npm install
```

## Running the app

```bash
# backend
$ npm run start
```

```bash
# backend
$ npm run dev
```


## Testing the app

```bash
# unit tests in backend code
$ cd backend && npm run test

## Future improvements

Due to limited time available for development, certain aspects and features were not fully explored or implemented. This decision was made to prioritize essential functionalities and ensure the timely delivery of the project.
Some of these elements are:
 - Frontend testing.
 - Hardcoding of some string and elements.
 - Some security issues like the endpoint is not using any authentication mechanism.

## Stay in touch

- Twitter - [@antonov](https://twitter.com/antonov)
