# lean-ts

A lean TypeScript boilerplate designed for non-frontend projects with
a focus on clean architecture principles.
This template provides a solid foundation for projects that may scale over time,
with carefully structured layers that support proper separation of concerns.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Example Usage](#example-usage)
- [Scripts](#scripts)
- [Documentation](#documentation)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- **Clean architecture**: Properly separated layers (core, application, infrastructure)
  with clear boundaries and dependencies pointing inward
- **Domain-Drive Design Support**: Structured with entities,
  value objects, and repositories to support DDD principles.
- **Minimal Dependencies**: Carefully selected external packages to
  minimize bloat and security vulnerabilities.
- **Comprehensive Testing Setup**: Pre-configured testing framework
  with support for:
  - Learning tests for understanding third-party libraries
  - Unit tests for isolated components
  - Integration tests for verifying component interactions
- **TypeScript Best Practices**: Strict type checking and
  modern TypeScript features enabled.

## Getting Started

### Prerequisites

- **Node.js**: Version 22 or higher (latest LTS recommended)
- **npm**: Version 10 or higher (comes with Node.js).
- **TypeScript**: Version 5.8 or higher (installed as a project dependency).
- **ESLint**: Version 98 or higher (installed as a project dependency).
- **Prettier**: Version 3.5 or higher (installed as a project dependency).

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
    rm package-lock.json
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

## Example Usage

After installation, you can begin building your application by:

1. Defining your domain entities in `src/core/entities/`
2. Creating repository interfaces in `src/core/repos/`
3. Implementing use cases in `src/app/use-cases/`
4. Adding infrastructure implementations in `src/infra/`

## Documentation

- [Architecture Overview](./docs/ARCHITECTURE.md) - Detailed explanation of
  the project's architecture and design decisions.
- [Environment Configuration](./docs/ENVIRONMENT.md) - How to configure
  environment variables.
- [Node.js Configuration](./docs/NODEJS_CONFIG.md) - Explanation of
  `package.json` settings.
- [TypeScript Configuration](./docs/TYPESCRIPT_CONFIG.md) - Details about
  TypeScript compiler options.
- [Testing Guide](./docs/TESTING.md) - Guide to writing and
  running tests.
- [Contribution Guidelines](./docs/CONTRIBUTING.md) - How to contribute to the project.
- [Backlog](./docs/BACKLOG.md) - Planned features and improvements.

## Troubleshooting

### Common Issues

- **TypeScript Compilation Errors**: Ensure you're using Node.js v22+ and
  have run `npm install`
- **Test Failures**: Make sure your Node.js version matches
  the required version in `.nvmrc`
- **ESLint Configuration Issues**: The project uses the new flat config format.
  For IDE integration, ensure your editor supports ESLint v9+

## License

This project is licensed under the ISC License.
