# lean-ts

A very lean Typescript boilerplate.
This can be used for different non-frontend project purposes.
I try my best to make the architecture as clean as possible so in case
you use this boilerplate at a starting point and your project somehow grows big in the future,
you already have a good base to support your project's growth.

## Usage

First, clone the repo

```bash
git clone https://github.com/leehpham/lean-ts.git <project-folder-name>
```

Remove `.git`

```bash
rm -rf .git
```

Rename `"name"` field in `package.json` to your `<project-folder-name>`.

Replace the content of `README.md` to your linking.

## Folder Structure

### learning-tests

Following the idea of "keeping framework code distant",
this is where your "learning tests" for 3rd-party frameworks/libraries should go to.
You are encouraged to write these tests because:
- They help you learn how to use the APIs of the frameworks/libraries.
- They act as the sanity check for when you need to migrate/update the frameworks/libraries to newer versions.

### src

#### library-wrappers

This is where you write wrappers for 3rd-party frameworks/libraries.
Again, the idea of "keeping framework code distant" is embraced here.
Recommended patterns are `Facade`, `Adapter`, `Proxy` and `Decorator`.

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
  - [] migrate to eslint-stylistic when ESLint makes the final announcement.
- [x] Add npm scripts.
- [x] devDependencies
  - [x] ts-node-dev
- [] Add InversifyJS
- [x] Add Jest
- [] Add Prettier
- [x] Add lodash

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

`npm install --save lodash`

`npm install --save-dev @types/lodash`
