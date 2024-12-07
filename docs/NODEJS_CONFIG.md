# Node.js Configuration

This document explains the fields set in the `package.json` file.

- `"name"`: The name of the package/project.
- `"version"`: The version of this package/project.
  Semver should be used here.
  By default, `1.0.0` is set, but you can start with `0.0.0`.
- `"description"`: This helps people discover your package/project as
  it's listed in `npm search`.
  Remove this if your package/project is private and/or not published to NPM registry.
- `"main"`: The entry point to your program.
- `"scripts"`: Script commands. See [here](../README.md) for more details.
- `"keywords"`: This helps people discover your package/project as
  it's listed in `npm search`.
  Remove this if your package/project is private and/or not published to NPM registry.
- `"author"`: A person who has been involved in creating or maintaining this package/project.
- `"license"`: The license of the package/project.
- `"dependencies"`: Dependencies. See [here](./DEPENDENCIES.md) for details.
- `"devDependencies"`: Development dependencies.
  See [here](./DEPENDENCIES.md) for details.
