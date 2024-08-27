import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticTS from "@stylistic/eslint-plugin-ts";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

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
  eslintConfigPrettier,
  {
    plugins: {
      "@stylistic/js": stylisticJs,
      "@stylistic/ts": stylisticTS,
      "@typescript-eslint-plugin": tsEslintPlugin,
      "simple-import-sort": simpleImportSort,
    },
  },
  {
    rules: {
      "@stylistic/ts/quotes": ["error", "double"],
      "@stylistic/ts/semi": ["error", "always"],
      "@stylistic/ts/member-delimiter-style": "error",
      "@typescript-eslint-plugin/method-signature-style": "error",
      "@stylistic/js/eol-last": ["error", "always"],
      "@typescript-eslint-plugin/explicit-function-return-type": "error",
      "@typescript-eslint-plugin/explicit-member-accessibility": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  }
);
