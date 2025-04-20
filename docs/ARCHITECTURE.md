# Architecture Overview

## High-Level Design

This project follows Clean Architecture.

### Directory Structure

```txt
/src
│
├── /core                     # Core domain logic (DDD)
│   ├── /entities             # Domain entities
│   │   └── user.ts
│   ├── /value-objects        # Domain-specific value objects
│   │   └── email.ts
│   ├── /aggregates           # Aggregate roots and related entities
│   │   └── userAggregate.ts
│   ├── /repositories         # Repository interfaces for persistence
│   │   └── iUserRepository.ts
│   ├── /services             # Domain services (business logic)
│   │   └── userService.ts
│   ├── /events               # Domain events and handlers
│   │   ├── userCreatedEvent.ts
│   │   └── userCreatedHandler.ts
│   └── /specifications       # Domain specifications
│       └── userSpecifications.ts
│
├── /app                      # Application logic (Use Cases, DTOs)
│   ├── /use-cases            # Application use cases
│   │   └── createUserUseCase.ts
│   ├── /dto                  # Data Transfer Objects (DTOs)
│   │   └── createUserDTO.ts
│   ├── /interfaces           # Interfaces for service inputs and outputs
│   │   └── iUserService.ts
│   └── /mappers              # Mappers to convert between domain and application layers
│       └── userMapper.ts
│
├── /infra                    # Frameworks, external services, and implementation details
│   ├── /facades              # Facade implementations for 3rd party packages
│   ├── /persistence          # Database interaction implementations
│   │   └── /mem
│   │       ├── /repositories               # Implementations of repository interfaces
│   │       │   └── userRepository.ts
│   │       ├── /models                     # Data persistence models
│   │       │   └── userModel.ts
│   │       ├── /migrations                 # Database migrations
│   │       │   └── createUsersTable.ts
│   │       └── data-source.ts              # Data source configuration
│   ├── /config               # Configuration files (e.g., environment variables)
│   ├── /services             # External service implementations (e.g., API clients, cloud services)
│   │   └── emailService.ts
│   ├── /adapters             # Adapter implementations for external systems (e.g., file storage, messaging)
│   │   └── s3Adapter.ts
│   └── /utils                # Infrastructure-specific utility functions
│       └── logger.ts
│
├── /presentation             # Presentation layer (API, CLI, UI)
│   ├── /rest                 # RESTful API
│   │   ├── /controllers      # REST controllers
│   │   │   └── userController.ts
│   │   ├── /middlewares      # Middlewares for RESTful API request handling
│   │   │   └── authMiddleware.ts
│   │   └── /routes           # RESTful API routes
│   │       └── userRoutes.ts
│   ├── /graphql              # GraphQL API
│   │   ├── /resolvers        # GraphQL resolvers
│   │   │   └── userResolver.ts
│   │   ├── /middlewares      # Middlewares for GraphQL request handling
│   │   │   └── graphQlAuthMiddleware.ts
│   │   └── /schemas          # GraphQL schema definitions
│   │       └── userSchema.ts
│   └── /cli                  # Command-Line Interface (CLI)
│       ├── /commands         # CLI commands
│       │   └── createUserCommand.ts
│       └── /handlers         # CLI command handlers
│           └── createUserHandler.ts
│
├── /shared                   # Shared modules, utilities, and types
│   ├── /utils                # Utility functions used across the application
│   │   └── hashUtils.ts
│   ├── /types                # Shared TypeScript types
│   │   └── customTypes.ts
│   └── /constants            # Shared constants
│       └── appConstants.ts
│
└── index.ts                  # Entry point of the application
```

### Design Pattern

- **Dependency Injection**: Used to decouple services.
  `typedi` is used as the IoC container.
- **Facade**
- **Adapter**
- **Proxy**
- **Decorator**
