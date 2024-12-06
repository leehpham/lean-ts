# lean-ts

A very lean Typescript boilerplate.
This can be used for different non-frontend project purposes.
I try my best to make the architecture as clean as possible so in case
you use this boilerplate at a starting point and
your project somehow grows big in the future,
you already have a good base to support your project's growth.

## Features

- Clean architecture.
- DDD support.
- Minimum numbers of external packages.
- Configurations for learning, unit and integration tests.

## Getting Started

### Prerequisites

- **Node.js**: Latest LTS version.
- **npm**: Should follow the version of Node.js.
- **TypeScript**: Latest LTS version.
- **ESLint**: Latest LTS version.
- **Prettier**: Latest LTS version.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/leehpham/lean-ts.git <project-folder-name>

2. Remove `.git`:

    ```bash
    rm -rf .git
    ```

3. Remove `package-lock.json`:

    ```bash
    rm -rf package-lock.json
    ```

4. Rename `"name"` field in `package.json` to your `<project-folder-name>`.

5. Install packages

    ```bash
    npm install
    ```

6. (Optional) Update packages and set their version in `package.json`:

    ```bash
    npm update --save
    ```

7. Run tests to make sure everything is working:

    ```bash
    npm run test
    ```

8. Update the content of `README.md` and documentation in `docs` folder to your liking.

## Scripts

- `npm run build`: Build the application.
  The output `.js` files will be in the `dist` folder.
- `npm run build:watch`: Build in watch mode.
- `npm run start`: Start the application.
- `npm run start:watch`: Start the application in watch mode.
  This can be used during development.
- `npm run lint`: Lint files `src` folder.
  This needs to be updated to also lint test files in `__tests__` folder.
- `npm run lint:fix`: Fix linting issues for files in `src` folder.
- `npm run test`: Run **all** tests.
- `npm run test:watch`: Run all tests in watch mode.
- `npm run test:learning`: Run learning tests.
- `npm run test:learning:watch`: Run learning tests in watch mode.
- `npm run test:unit`: Run unit tests.
- `npm run test:unit:watch`: Run unit tests in watch mode.

## Documentation

- [Architecture Overview](./docs/ARCHITECTURE.md)

## License

This project is licensed under the ISC License.

## Folder Structure

### __tests__

#### learning

Following the idea of "keeping framework code distant",
this is where your "learning tests" for 3rd-party frameworks/libraries should go to.
You are encouraged to write these tests because:
- They help you learn how to use the APIs of the frameworks/libraries.
- They act as the sanity check for when you need to migrate/update the frameworks/libraries to newer versions.

## Commands Used

`npm init -y`

`npm install --save-dev typescript`

`npx tsc --init`

`npm install --save-dev @types/node`

`npm install --save-dev eslint`

```bash
# This will help replace eslint:recommended.
# This is from ESLint site. 
npm install --save-dev @eslint/js
```

```bash
# Typing support for @eslint/js
# This is from typescript-eslint site.
npm install --save-dev @types/eslint__js

```

```bash
# This is from typescript-eslint site.
npm install --save-dev typescript-eslint
```

```bash
# From ESLint Stylistic, some rules are moved from ESLint here.
npm install --save-dev @stylistic/eslint-plugin-js
```

```bash
# From ESLint Stylistic, some rules are moved from ESLint here.
npm install --save-dev @stylistic/eslint-plugin-ts
```

```bash
# Keep even after the migration to ESLint 9.
npm install --save-dev @typescript-eslint/eslint-plugin
```

```bash
# Removed after the migration to ESLint 9.
npm install --save-dev @typescript-eslint/parser
```

`npm install --save-dev ts-node-dev`

`npm install --save-dev jest`

`npm install --save-dev ts-jest`

`npm install --save-dev @types/jest`

`npx ts-jest config:init`

`npm install --save lodash`

`npm install --save-dev @types/lodash`

`npm install typedi`

`npm install reflect-metadata`

`npm install prettier`

`npm install --save-dev eslint-config-prettier`

`npm install --save-dev eslint-plugin-simple-import-sort`
