# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

lean-ts is a TypeScript boilerplate for non-frontend projects built on Clean Architecture and Domain-Driven Design (DDD) principles. It uses TypeDI for dependency injection and emphasizes proper separation of concerns with dependencies pointing inward.

## Common Commands

### Build and Run
- `npm run build` - Compile TypeScript to JavaScript (outputs to `./dist/`)
- `npm run build:watch` - Compile in watch mode
- `npm run start` - Build and run the compiled application
- `npm run start:watch` - Run with hot reload using ts-node-dev

### Linting
- `npm run lint` - Run ESLint on the codebase
- `npm run lint:fix` - Run ESLint with auto-fix

### Testing
The project uses Jest with three distinct test categories:

- `npm run test:eslint` - Run ESLint rules tests (validates ESLint configuration)
- `npm run test:learning` - Run learning tests for third-party libraries (lodash, typedi, etc.)
- `npm run test:unit` - Run unit tests
- `npm run test:all` - Run all tests (eslint + learning + unit)
- `npm run test:unit:watch` - Run unit tests in watch mode
- `npm run test:learning:watch` - Run learning tests in watch mode

**Important**: Always run `npm run test:all` before committing to ensure all test suites pass.

### Running Single Tests
```bash
# Run a specific test file
npm run test -- path/to/test.test.ts

# Run tests matching a pattern
npm run test -- -t "test name pattern"
```

### Docker
The Dockerfile uses multi-stage builds with the following stages:
- `deps` - Install all dependencies
- `lint` - Lint TypeScript code
- `test-eslint` - Run ESLint tests
- `test-learning` - Run learning tests
- `test-unit` - Run unit tests
- `builder` - Compile TypeScript
- `runner` - Production image (runtime only, no dev deps)

Build: `docker build -t lean-ts .`

## Architecture

### Layer Structure
The codebase follows Clean Architecture with strict dependency rules (dependencies point inward):

```
presentation → app → core
           ↘  ↓  ↙
            infra
```

**Core Layer** (`src/core/`): Domain logic with zero external dependencies
- `/entities` - Domain entities (business objects)
- `/value-objects` - Domain value objects
- `/aggregates` - Aggregate roots
- `/repositories` - Repository interfaces (abstractions only)
- `/services` - Domain services (business logic)
- `/events` - Domain events and handlers
- `/specifications` - Domain specifications

**Application Layer** (`src/app/`): Use cases and orchestration
- `/use-cases` - Application use cases (orchestrate domain logic)
  - Use `UseCaseTemplate` abstract class which enforces input validation before execution
  - Implement `handleLogic()` for business logic
  - Provide `_inputValidator` for input validation
- `/dto` - Data Transfer Objects
- `/interfaces` - Service interfaces for inputs/outputs
- `/mappers` - Transform between domain and application layers

**Infrastructure Layer** (`src/infra/`): External concerns and implementations
- `/lib-wrappers` - Facades for third-party packages (e.g., lodashFacade)
- `/persistence` - Data persistence implementations
  - `/mem` - In-memory persistence (development/testing)
    - `/repos` - Repository implementations (implement core interfaces)
    - `/models` - Persistence models (e.g., TodoItemMemModel)
    - `/impls` - Database operations (db.ts, table.ts, etc.)
- `/config` - Configuration files
- `/services` - External service implementations
- `/adapters` - Adapters for external systems (S3, Secrets Manager, etc.)
- `/utils` - Infrastructure utilities

**Presentation Layer** (`src/presentation/`): User interfaces
- `/rest` - RESTful API (controllers, middlewares, routes)
- `/graphql` - GraphQL API (resolvers, schemas, middlewares)
- `/cli` - CLI commands and handlers

**Shared** (`src/shared/`): Cross-cutting concerns
- `/utils` - Shared utility functions
- `/types` - Shared TypeScript types
- `/constants` - Application constants
- `/interfaces` - Shared interfaces (e.g., IVldtr)

### Key Patterns

**Repository Pattern**: Core layer defines interfaces (e.g., `ITodoItemMemRepo`), infrastructure provides implementations. All in-memory repositories extend `BaseMemRepo<T extends MemModel>`.

**Use Case Pattern**: All use cases extend `UseCaseTemplate<Input, Output>` which enforces:
1. Input validation via `_inputValidator.validate(input)`
2. Business logic execution via abstract `handleLogic(input)`

**Dependency Injection**: Uses TypeDI container with decorators (`@Service()`, `@Inject()`). Must enable `experimentalDecorators` and `emitDecoratorMetadata` in tsconfig.json.

**Facade Pattern**: Third-party libraries wrapped in facades (e.g., `lodashFacade` wraps lodash functions like `cloneDeep`, `isEqual`).

## Code Style

### TypeScript Configuration
- Strict mode enabled with comprehensive type checking
- Target: ES2022, CommonJS modules
- Decorators enabled for TypeDI
- No unused locals/parameters allowed
- Source maps generated for debugging

### ESLint Rules (Flat Config)
- Double quotes enforced (`@stylistic/quotes`)
- Semicolons required (`@stylistic/semi`)
- Explicit function return types required (`@typescript-eslint-plugin/explicit-function-return-type`)
- Explicit member accessibility required (`@typescript-eslint-plugin/explicit-member-accessibility`)
- Import/export sorting enforced (`simple-import-sort`)
- Method signature style enforced
- End-of-line at file end required

## Testing Strategy

### Learning Tests (`__tests__/learning/`)
Write tests for third-party libraries (lodash, typedi) to:
- Learn library APIs
- Sanity check when migrating/updating versions
- Keep framework code understanding explicit

### Unit Tests (`__tests__/unit/`)
Mirror the `src/` structure. Fast, in-memory tests for:
- Use case implementations (inputVldtr, useCase)
- Repository implementations
- Facades and wrappers
- Core business logic

### Integration Tests (`__tests__/integration/`)
Structure defined but not yet implemented.

## Development Guidelines

1. **Layer Dependencies**: Never let core depend on infrastructure. Use interfaces in core, implementations in infrastructure.

2. **Use Case Development**:
   - Extend `UseCaseTemplate<Input, Output>`
   - Create corresponding input validator implementing `IInputVldtr<Input>`
   - Define DTOs in `src/app/dto/`

3. **Repository Development**:
   - Define interface in `src/core/repos/`
   - Implement in `src/infra/persistence/[storage-type]/repos/`
   - Extend `BaseMemRepo<T>` for in-memory repositories

4. **Third-Party Libraries**:
   - Write learning tests first
   - Create facade in `src/infra/lib-wrappers/`
   - Never use external libraries directly in core/app layers

5. **TypeScript**: All functions must have explicit return types, all class members must have explicit accessibility modifiers.

6. **Installation**: Use `npm ci` (not `npm install`) for deterministic builds as documented in the project.
