# Backlog

## In Progress

## Todo

- [] Add `.ignore` file.
- [] Update the documentation to specify which config files belong to which tools
- [] Update ESLint config to also lint test files in `__tests__` folder.
  Also, need to move flags in ESLint's `npm` scripts related to the config file.
  We need a single source of truth.
- [] Research about how to apply Facade, Adapter, Proxy and Decorator correctly.
- [] Consider changing `"module"` option in `tsconfig.json` to ES module.
  `"type"` needs to be added to `package.json` as well.
- [] Update folder names to match the project folder structure specified in ARCHITECTURE.md.
- [] Research about licensing.
- [] Set up debugger for phpstorm
- [] Set up debugger neovim (later)

## Done

- [x] Review the option `"skipLibCheck"` in `tsconfig.json`.
  Why was this set to `true`?
- [x] Review current compiler options.
- [x] Add `sourceMap` option to `tsconfig.json`.
- [x] Set up debugger for vscode.
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
  - [x] migrate to eslint-stylistic when ESLint makes the final announcement.
- [x] Add npm scripts.
- [x] ts-node-dev
- [x] Add `typedi`.
- [x] Add Jest
- [x] Add Prettier
- [x] Add lodash
