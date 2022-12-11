import type { Config } from 'jest';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
  preset: 'ts-jest',

  roots: ['./src/', './test/'],

  // clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['src/**/*.{ts,js,mjs}'],
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 70,
    },
  },

  testMatch: ['**/test/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
} as Config;
