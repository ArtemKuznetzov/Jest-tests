/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

// TDD - Test Driven Development. Сперва теста, потом функционал. Можно писать тесты на баги
export default {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/index.ts',
        '!src/main.tsx',
        '!src/app/types/decs.d.ts',
        '!src/app/types/global.d.ts'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [ '<rootDir>config/jest/setupTests.ts',
            '<rootDir>config/jest/setEnvVars.ts',
            '<rootDir>config/jest/customMatchers.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer',
        '^.+\\.scss$': 'identity-obj-proxy',
    },
    rootDir: '../../',
    modulePaths: [
        '<rootDir>src',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    globals: {
        __ISDEV__: true,
    },
};