import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/dist/**",
      "**/jest.config.js",
      "**/jest.config.eslint.js",
      "**/jest.config.learning.js",
      "**/jest.config.unit.js",
      "**/jest.config.integration.js",
    ],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint-plugin": tsEslintPlugin,
      "simple-import-sort": simpleImportSort,
    },
  },
  {
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/member-delimiter-style": "error",
      "@typescript-eslint-plugin/method-signature-style": "error",
      "@stylistic/eol-last": ["error", "always"],
      "@typescript-eslint-plugin/explicit-function-return-type": "error",
      "@typescript-eslint-plugin/explicit-member-accessibility": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  }
);
