# Minyma Starter Template for Typescript+Express applications

## Install

- fetch the template from GitHub: `npx degit git@github.com:minyma/to-be-decided <target-directory-name>`
- install dependencies: `npm install`
- generate Prisma client: `prisma generate`
- run dev server: `npm run start:dev`

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

### Base features

- [x] A database setup. Edit `prisma/schema.prisma` to update the model.
- [x] A User model with username and password
- [x] Register endpoint with password hashing via `bcrypt`, at `/api/auth/register POST`
- [x] Login endpoint which cheks the hashed passwords and yields a `jwt` token at `api/auth/login POST`

## Usage

### Editing the data model

- edit `prisma/schema.prisma`, to update the data models as needed.
- run `npx prisma migrate` to apply the changes.

### Editing the config

- edit one of `config/<environment>.ts`.
- use `import config from 'config'` to access configs
- access newly added fields via `config.get('foo.bar.baz')`
- note that the config loaded depends on `NODE_ENV` env var
- make sure to add secrets as env variables in the config files
