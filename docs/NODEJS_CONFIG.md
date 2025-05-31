# Node.js Configuration

This document explains the fields set in the `package.json` file.

## Basic Information

- `"name": "lean-ts"`
  - The package name as used in npm registry.
- `"version": "0.1.0"`
  - Current version follow semantic versioning (SemVer).
    This is intentionally set to `0.1.0` (the default value is `1.0.0`).
    - Start with `0.1.0` if:
      - The project is still in early development.
      - The API is unstable and may change frequently.
      - You don't consider the project ready for general use.
    - Start with `1.0.0` if:
      - The project is stable and functional.
      - The API is well-defined and ready for production use.
      - You want to indicate confidence in its usability.
- `"description": "<value>"`
  - Brief description of the package.
    Remove this if your package/project is private and/or not published to npm registry.
- `"main": "./dist/main.js"`
  - The entry point to your program.

## Scripts

- `npm run build`: Compiles TypeScript to JavaScript.
  Output files will be in the `dist` folder.
- `npm run build:watch`: Compiles TypeScript in watch mode,
  automatically rebuilding when files change.
- `npm run start`: Builds the application and runs it.
  Entry point is `src/main.ts`.
- `npm run start:watch`: Runs the application in development mode with
  hot-reload when files change.
- `npm run lint`: Runs ESLint to check for code quality issues in the
  `__tests__` and `src` folder.
- `npm run lint:fix`: Automatically fixes linting issues where possible
  in the `__tests__` and `src` folder.
- `npm run test`: Acts as an alias for `npx jest`.
- `npm run test:learning`: Runs only learning tests which
  demonstrate third-party library usage.
- `npm run test:learning:watch`: Run learning tests in watch mode.
- `npm run test:unit`: Runs only unit tests which
  verify individual components in isolation.
- `npm run test:unit:watch`: Run unit tests in watch mode.

## Engine Requirements

```json
"engines": {
  "node": ">=22"
}
```

The `engines` field specifies that the package requires Node.js version 22 or higher
to run correctly.
This is also reflected in the `.nvmrc` file.

**Note:** When we upgrade Node.js to a newer version,
both of these entries need to be updated accordingly.

## Package Metadata

- `"keywords": "<value>"`
  - Keywords for npm search.
  Remove this if your package/project is private and/or not published to NPM registry.
- `"author": "Hoang Pham"`
  - Package author.
- `"license": "ISC"`
  - License type.

## Dependencies

### Runtime Dependencies

- `lodash`: A popular JavaScript library that provides utility functions for
  common programming tasks.
  Developed and maintained by lodash.
- `reflect-metadata`: Helps perform advanced tasks in decorators by
  collecting metadata about classes, properties, methods and parameters.
  Developed and maintained by rbuckton.
  **Note**: The APIs are no longer being considered for standardization.
  However, this package will continue to support
  TypeScript's legacy `--experimentalDecorators` option.
- `typedi`: A dependency injection tool for TypeScript and JavaScript.
  **Note**: The development of this package was terminated several years ago.

### Development Dependencies

- `@eslint/js`: The beginning of separating out
  JavaScript-specific functionality from ESLint.
  Developed and maintained by ESLint.
- `@faker-js/faker`: Generates massive amounts of fake
  (but realistic) data for testing and development.
  Developed and maintained by faker-js.
- `"jest/globals"`: Jest's APIs that are compatible with TypeScript.
  Developed and maintained by Facebook.
- `@stylistic/eslint-plugin`: Stylistic rules for ESLint.
  Developed and maintained by eslint-stylistic.
- `@types/lodash`: Type definitions for `lodash`.
  Developed and maintained by DefinitelyTyped.
- `@types/node`: Type definitions for Node.js.
  Developed and maintained by DefinitelyTypes.
- `@typescript-eslint/eslint-plugin`: ESLint plugin which
  provides lint rules for TypeScript codebase.
  Some rules in here are not available in `@stylelistic/eslint-plugin` (yet?).
  Developed and maintained by typescript-eslint.
- `eslint`: A tool for identifying and reporting on patterns
  found in ECMAScript/JS code.
  Developed and maintained by ESLint.
- `eslint-config-prettier`: Turns off all ESLint's rules
  that are unnecessary or might conflict with Prettier.
  Developed and maintained by Prettier.
- `eslint-plugin-simple-import-sort`: ESLint's plugin for
  easy autofixable import sorting.
  Developed and maintained by lydell.
- `jest`: JavaScript testing framework.
  Developed and maintained by Facebook.
- `prettier`: An opinionated code formatter.
  Developed and maintained by Prettier.
- `ts-jest`: A Jest transformer with source map support that
  lets you use Jest to test projects written in TypeScript.
  Developed and maintained by kulshekhar.
- `ts-node-dev`: Automatically restarts the node process when
  a file is modified.
  Developed and maintained by whitecolor.
- `typescript`: Language for application-scale JavaScript.
  Developed and maintained by Microsoft.
- `typescript-eslint`: Tooling which enables you to use TypeScript with ESLint.
  Developed and maintained by typescript-eslint.
