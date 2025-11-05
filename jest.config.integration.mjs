import baseConfig from "./jest.config.mjs";

export default {
  ...baseConfig,
  testMatch: ["<rootDir>/__tests__/integration/**/*.test.ts"],
};
