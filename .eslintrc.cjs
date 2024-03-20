module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended', // TanStack Query 규칙 추가
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-refresh',
    '@typescript-eslint',
    'unused-imports', // 사용하지 않는 import를 처리하기 위해 추가
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 사용하지 않는 변수 및 import 제거 규칙 추가
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    // Prettier와 충돌할 수 있는 TypeScript 규칙 비활성화
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // 'unused-imports/no-unused-vars' 규칙으로 대체
  },
  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
};
