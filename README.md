# Minyma Starter Template for Typescript+Express applications

## Install

- fetch the template from GitHub: `npx tiged https://github.com/minyma-technologies/typescript-express-starter.git <target-folder> --mode=git`
- `cd <target-folder>`
- install dependencies: `npm install`
- generate Prisma client: `npx prisma generate`
- synch Prisma with db: `npx prisma migrate dev --init`
- run dev server: `npm run start:dev`

### Using Docker Compose

- fetch the template from GitHub: `npx tiged https://github.com/minyma-technologies/typescript-express-starter.git <target-folder> --mode=git`
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
- [x] [Commitizen](https://github.com/commitizen/cz-cli) to enforce commit message rules

### Base features

- [x] A database setup. Edit `prisma/schema.prisma` to update the model.
- [x] A User model with username and password
- [x] Register endpoint with password hashing via `bcrypt`, at `/api/auth/register POST`
- [x] Login endpoint which cheks the hashed passwords and yields a `jwt` token at `api/auth/login POST`
- [x] GitHub Actions config for lint, test and coverage
- [x] Pre-push git hooks to lint code and commit message before publishing changes

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

### Pre-push checks

- this repo uses husky and commitizen to enforce certain rules before changes are pushed to remote
- namely, after the `push` command is issued:
  - `lint:fix` is ran, and changes automatically staged and amended to last commit. If there are lint problems that eslint can't autofix, the push will abort.
  - `commitlint` is used to check if last commit message conforms to commit message rules. If not, you will be prompted to write a commit message from the possible options. After the valid commit message is entered the last commit message will be updated.
  - you can use `npm run commit` or `npx cz` to automatically pull up the commit message prompt.

### Test and coverage checks in CI

- test and coverage checks are run within the GitHub CI, and are enforced (or not) by the repository maintainer pre-merge.
- this allows WIP branches to be pushed without being blocked by a coverage threshold too high, or by temporarily failing unit tests.

### Pre-commit hooks

- there are no pre commit hooks. Developers should be able to make as many commits, as they want locally. Commits should be squashed upon merge, hence only the last commit message _has to_ confirm to commit message conventions.

## TODO:

- [ ] update `docker-compose.yml` to automatically run `npx migrate`
- [ ] secret detection pre-commit hook
- [ ] API example tests
- [ ] auto changelog
- [ ] semantic versioning?
