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
  - rules to consider:
    - [x] space-before-function-paren (review)
    - [x] method-signature-style
    - [x] Enforce function return type.
  - [x] Set eslint to only lint needed files.
  - [] migrate to eslint-stylistic when ESLint makes the final annoucement.
- [x] Add npm scripts.
- [] Add Jest
- [] Add Prettier

## Commands Used

`npm init -y`

`npm install --save-dev typescript`

`npx tsc --init`

`npm install --save-dev @types/node`

`npm install --save-dev eslint`

`npm install --save-dev @typescript-eslint/eslint-plugin`

`npm install --save-dev @typescript-eslint/parser`
