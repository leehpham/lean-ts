# Dependencies

## Runtime Dependencies

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

## Dev Dependencies

- `@eslint/js`: The beginning of separating out
  JavaScript-specific functionality from ESLint.
  Developed and maintained by ESLint.
- `@faker-js/faker`: Generates massive amounts of fake
  (but realistic) data for testing and development.
  Developed and maintained by faker-js.
- `@stylistic/eslint-plugin-js`: JavaScript stylistic rules for ESLint,
  migrated from `eslint core`.
  Developed and maintained by eslint-stylistic.
- `@stylistic/eslint-plugin-ts`: TypeScript stylistic rules for ESLint,
  migrated from `typescript-eslint`.
  Developed and maintained by eslint-stylistic.
- `@types/eslint__js`: Type definitions for `@eslint/js`.
  Developed and maintained by DefinitelyTyped.
- `@types/lodash`: Type definitions for `lodash`.
  Developed and maintained by DefinitelyTyped.
- `@types/node`: Type definitions for Node.js.
  Developed and maintained by DefinitelyTypes.
- `@typescript-eslint/eslint-plugin`: ESLint plugin which
  provides lint rules for TypeScript codebase.
  Some rules in here are not available in `@stylelistic/eslint-plugin-ts` (yet?).
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

## Installation Steps

This is for just in case you want to re-install all the dependencies from scratch.

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
# This is from typescript-eslint site.
npm install --save-dev typescript-eslint
```

```bash
# From ESLint Stylistic, some rules are moved from ESLint here.
npm install --save-dev @stylistic/eslint-plugin
```

```bash
# Keep even after the migration to ESLint 9.
npm install --save-dev @typescript-eslint/eslint-plugin
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
