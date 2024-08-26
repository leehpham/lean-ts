// import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import simpleImportSort from "eslint-plugin-simple-import-sort";
// import tsParser from "@typescript-eslint/parser";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// });
//
// export default [
//   {
//     ignores: [
//       "**/dist",
//       "**/jest.config.js",
//       "**/jest.config.learning.js",
//       "**/jest.config.unit.js",
//       "**/jest.config.integration.js",
//     ],
//   },
//   ...compat.extends(
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier"
//   ),
//   {
//     plugins: {
//       "@typescript-eslint": typescriptEslint,
//       "simple-import-sort": simpleImportSort,
//     },
//
//     languageOptions: {
//       parser: tsParser,
//     },
//
//     rules: {
//       quotes: "off",
//       "@typescript-eslint/quotes": ["error", "double"],
//       semi: "off",
//       "@typescript-eslint/semi": ["error", "always"],
//       "@typescript-eslint/member-delimiter-style": "error",
//       "@typescript-eslint/method-signature-style": "error",
//       "eol-last": ["error", "always"],
//       "@typescript-eslint/explicit-function-return-type": "error",
//       "@typescript-eslint/explicit-member-accessibility": "error",
//       "simple-import-sort/imports": "error",
//       "simple-import-sort/exports": "error",
//     },
//   },
// ];

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  {
    ignores: [
      "**/dist",
      "**/jest.config.js",
      "**/jest.config.learning.js",
      "**/jest.config.unit.js",
      "**/jest.config.integration.js",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
  },
  {
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  }
);

