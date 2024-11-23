const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [require.resolve('@sanity/eslint-config-studio"'), 'turbo'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['prettier', 'simple-import-sort', 'eslint-plugin-import'],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    'dist',
    '.*.js',
    'node_modules/',
    '.sanity',
  ],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/no-default-export': 'error',
  },
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
