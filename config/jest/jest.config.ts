/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

// TDD - Test Driven Development. Сперва теста, потом функционал. Можно писать тесты на баги
export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    collectCoverage: true,
    // для того, чтобы исключить какие-то файлы, используется !
    // rootDir по какой-то причине не воспринимается для этого конфига. Временное решение - указывать путь в
    // скрипте запуска.
    // Можно ИГНОРИРОВАТЬ проверку теста с помощью /* istanbul ignore next */
    collectCoverageFrom: ['<rootdir>src/**/*.{ts|tsx}', '!<rootdir>src/**/*.mock.*'],
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    coverageThreshold: {
      global: {
          // минимальное необходимое покрытие. В данном случае 80 процентов
          // для branches, как правило, самое низкое порогое значение покрытия
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
      }
    },
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTests.ts',
        '<rootDir>config/jest/setEnvVars.ts',
        '<rootDir>config/jest/customMatchers.ts'
    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
    // Один из вариантов объявления глобальной переменной. Можно так, можно в setupTests.ts
    globals: {
        __ISDEV__: true
    }
};