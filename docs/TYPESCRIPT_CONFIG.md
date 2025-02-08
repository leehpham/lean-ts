# TypeScript Configuration

This document explains the fields set in the `tsconfig.json` file.

## `"compilerOptions"`

### Language and Environment

- `"target"`: Set the JavaScript language version for emitted JavaScript and
  include compatible library declarations.
- `"experimentalDecorators`: Enable experimental support for TC39 stage 2 draft decorators.
  Refer to `reflect-metadata` [here](./DEPENDENCIES.md) for details.
- `"emitDecoratorMetadata`: Emit design-type metadata for
  decorated declarations in source files.

### Modules

- `"module"`: Specify what module code is generated.

### Emit

- `"sourceMap"`: Create source map files for emitted JavaScript files.
- `"outDir"`: Specify an output folder for all emitted files.
- `"removeComments"`: Disable emitting comments.
- `"noEmitOnError"`: Disable emitting files if any type checking errors are reported.

### Interop Constraints

- `"esModuleInterop"`: Emit additional JavaScript to ease support for
  importing CommonJS modules.
  This enables `allowSyntheticDefaultImports` for type compatibility.
  **This option could be removed when `"module` is set to ES Module.**
- `"forceConsistentCasingInFileName"`: Ensure that casing is correct in imports.

### Type Checking

- `"strict"`: Enable all strict type checking options.
- `"noUnusedLocals`: Enable error reporting when a local variable isn't read.
- `"noUnusedParameters"`: Raise an error when a function parameter isn't read.
- `"noFallthroughCasesInSwitch"`: Enable error reporting for
  fallthrough cases in switch statements.
- `"noImplicitOverride"`: Ensure overriding members in derived classes are
  marked with an override modifier.
- `"allowUnusedLabels"`: Disable error reporting for unused labels.
- `"allowUnreachableCode"`: Disable error reporting for unreachable code.

### Completeness

- `"skipLibCheck"`: Skip type checking all .d.ts files.
  This is set to `true` by default.

## Others

- `"include"`: Specifies a list of glob patterns that
  match files to be included in compilation.
