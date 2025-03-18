const config = require("./jest.config");
config.testMatch = ["<rootDir>/__tests__/integration/**/*.test.ts"];
module.exports = config;
