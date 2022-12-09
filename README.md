# Minyma Starter Template for Typescript+Express applications

## Install

### Get the template

#### Using `degit`

[`degit`](https://github.com/Rich-Harris/degit) is an npm package, that when given a repository name, downloads the contents of the repo but not the `.git` folder, hence you will get the code, but will start with a clean git history. [`tiged`](https://github.com/tiged/tiged) is a community maintained fork of degit with equivalent API, but better long term support.
To download the template run:
`npx tiged https://github.com/minyma-technologies/typescript-express-starter.git <target-folder>`

#### Using Github template repository

You can instantiate a GitHub repository with a starting template by navigating to [this](https://github.com/minyma-technologies/typescript-express-starter) repo and hitting "Use this template" in the top right corner.
This will create a remote repository, which you can the clone locally.

### Run the project locally

- `cd <target-folder>`
- install dependencies: `npm install`
- generate Prisma client: `npx prisma generate`
- synch Prisma with db: `npx prisma migrate dev --init`
- run dev server: `npm run start:dev`

### Run in a container using Docker Compose

- `cd <target-folder>`
- build the Docker image: `docker-compose build`
- launch the containers: `docker-compose up`
- `exec` into the server container: `docker exec -it typescript-express-prisma-starter_express_1 sh`
- run the prisma initalization: `npx prisma migrate dev --name init`

## Included:

### Tech stack

This template is _very_ based. It includes:

- [x] [Typescript](https://www.typescriptlang.org/), strictly, as the language
- [x] [Express](https://expressjs.com/) as the web framework
- [x] [Prisma](https://www.prisma.io/) as the ORM
- [x] [zod](https://zod.dev/) for API schema validation
- [x] [JWT](https://jwt.io/) for auth
- [x] [ESLint](https://eslint.org/) for linting
- [x] [Prettier](https://prettier.io/) for style checking
- [x] [Jest](https://jestjs.io/) for testing
- [x] [Husky](https://typicode.github.io/husky/#/) for pre-commit hooks
- [x] [Postgres](https://www.postgresql.org/) as preconfigured database. This can be changed easily, by changing the database connection url in .env (see .env.example). For more details go [here](https://www.prisma.io/docs/concepts/database-connectors)

### Base features

- [x] A database setup. Edit `prisma/schema.prisma` to update the model.
- [x] A User model with username and password
- [x] Register endpoint with password hashing via `bcrypt`, at `/api/auth/register POST`
- [x] Login endpoint which cheks the hashed passwords and yields a `jwt` token at `api/auth/login POST`
- [x] GitHub Actions config for lint, test and coverage
- [x] Pre-push git hooks to lint code before publishing changes

## Usage

### Accessing the database

While it is possible to interact with your chosen database via their provided CLI or GUI client, prisma provides an easy-to-use GUI client out of the box. To access it, simply run `npx prisma studio`, then navigate to `localhost:5555` in your browser.

### Editing the data model

- edit `prisma/schema.prisma`, to update the data models as needed.
- run `npx prisma migrate` to apply the changes.

### Editing the config

- edit one of `config/<environment>.ts`.
- use `import config from 'config'` to access configs
- access newly added fields via `config.get('foo.bar.baz')`
- note that the config loaded depends on `NODE_ENV` env var
- make sure to add secrets as env variables in the config files

### Pre-push checks

- this repo uses husky to enforce certain rules before changes are pushed to remote
- namely, after the `push` command is issued:
  - `npm lint` is ran, if there are lint issues, the push will abort.
  - `npm test` is disabled by default, go to `.husky/pre-push` to enable

### Test and coverage checks in CI

- test and coverage checks are run within the GitHub CI, and are enforced (or not) by the repository maintainer pre-merge.
- this allows WIP branches to be pushed without being blocked by a coverage threshold too high, or by temporarily failing unit tests.

### Pre-commit hooks

- there are no pre commit hooks. Developers should be able to make as many commits, as they want locally. Commits should be squashed upon merge, hence only the last commit message _has to_ confirm to commit message conventions.

## TODO:

- [ ] update `docker-compose.yml` to automatically run `npx migrate`
- [ ] secret detection pre-commit hook
- [ ] API example tests
