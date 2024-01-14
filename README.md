# lean-ts

A very lean Typescript boilerplate. This can be used for different project purposes.

## Todo

- [x] review current compiler options.
- [] set up debugger for
  - [] vscode
    - [] add sourceMap option to tsconfig.
  - [] phpstorm
  - [] neovim (later)
- [x] Add ESLint
  - [x] https://github.com/standard/eslint-config-standard-with-typescript
  - [x] https://typescript-eslint.io/
  - [x] issue with member-delimiter-...
  - rules to add:
    - [x] space-before-function-paren (review)
    - [x] method-signature-style
    - [x] Enforce function return type.
    - [x] @typescript-eslint/explicit-member-accessibility
  - [x] Set eslint to only lint needed files.
  - [] migrate to eslint-stylistic when ESLint makes the final annoucement.
- [x] Add npm scripts.
- [] devDependencies
  - [x] ts-node-dev
- [] Add InversifyJS
- [x] Add Jest
- [] Add Prettier

## Commands Used

`npm init -y`

`npm install --save-dev typescript`

`npx tsc --init`

`npm install --save-dev @types/node`

`npm install --save-dev eslint`

`npm install --save-dev @typescript-eslint/eslint-plugin`

`npm install --save-dev @typescript-eslint/parser`

`npm install --save-dev ts-node-dev`

`npm install --save-dev jest`

`npm install --save-dev ts-jest`

`npm install --save-dev @types/jest`

`npx ts-jest config:init`
