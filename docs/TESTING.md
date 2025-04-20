# Testing Guide

## Directory Structure

```txt
__tests__
├── learning
│   ├── lodash
│   │   ├── cloneDeep.test.ts
│   │   └── isEqual.test.ts
│   └── typedi
│       ├── basicDi.test.ts
│       ├── basicUsage.test.ts
│       ├── injectDecoratorConstructor.test.ts
│       ├── injectDecoratorExplicitTarget.test.ts
│       └── injectDecoratorProperty.test.ts
└── unit
    └── src
        ├── app
        │   └── use-cases
        │       └── impls
        │           └── todo-item
        │               └── create
        │                   ├── inputVldtr.test.ts
        │                   └── useCase.test.ts
        └── infra
            ├── lib-wrappers
            │   └── lodash
            │       ├── lodashFacadeCloneDeep.test.ts
            │       └── lodashFacadeIsEqual.test.ts
            └── persistence
                └── mem
                    ├── impls
                    │   ├── memDb.test.ts
                    │   └── table.test.ts
                    └── repos
                        └── todo-item
                            └── todoItemRepo.test.ts
```

## Learning Tests

Following the idea of "keeping framework code distant",
this is where your "learning tests" for
3rd-party frameworks/libraries should go to.
You are encouraged to write these tests because:

- They help you learn how to use the APIs of the frameworks/libraries.
- They act as the sanity check for when you need to
  migrate/update the frameworks/libraries to newer versions.

## Unit Tests

Unit tests are supposed to be fast.
They are executed repeatedly and completely in memory.

## Integration Tests
