module.exports = {
  testEnvironment: "node",
  coverageDirectory: "./coverage",
  collectCoverage: true,
  coverageReporters: ["text", "lcov"],
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"]
};
