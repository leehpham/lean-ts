import baseConfig from "./jest.config.mjs";

export default {
  ...baseConfig,
  testMatch: ["<rootDir>/__tests__/unit/**/*.test.ts"],
};
