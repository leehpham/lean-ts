# Testing Guide

## Directory Structure

```txt
__tests__
└── src
    ├── learning
    │   ├── lodash
    │   │   ├── CloneDeep.learning.test.ts
    │   │   └── IsEqual.learning.test.ts
    │   └── typedi
    │       ├── BasicDi.learning.test.ts
    │       ├── BasicUsage.learning.test.ts
    │       ├── InjectDecoratorConstructor.learning.test.ts
    │       ├── InjectDecoratorExplicitTarget.learning.test.ts
    │       └── InjectDecoratorProperty.learning.test.ts
    └── unit
        ├── app
        │   └── use-cases
        │       ├── abstrs
        │       └── impls
        │           └── todo-item
        │               └── create
        │                   ├── InputVldtr.unit.test.ts
        │                   └── UseCase.unit.test.ts
        └── infra
            ├── lib-wrappers
            │   └── lodash
            │       ├── LodashFacadeCloneDeep.unit.test.ts
            │       └── LodashFacadeIsEqual.unit.test.ts
            └── persistence
                └── mem
                    ├── impls
                    │   ├── MemDb.unit.test.ts
                    │   └── Table.unit.test.ts
                    └── repos
                        └── todo-item
                            └── TodoItemRepo.unit.test.ts
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
