# Node.js Configuration

This document explains the fields set in the `package.json` file.

- `"name"`: The name of the package/project.
- `"version"`: The version of this package/project.
  SemVer should be used here.
  I set it to `0.1.0` (the default value is `1.0.0`).
  - Start with `0.1.0` if:
    - The project is still in early development.
    - The API is unstable and may change frequently.
    - You don't consider the project ready for general use.
  - Start with `1.0.0` if:
    - The project is stable and functional.
    - The API is well-defined and ready for production use.
    - You want to indicate confidence in its usability.
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
