import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sanityStudioConfig from '@sanity/eslint-config-studio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
export default {
  extends: [sanityStudioConfig, 'turbo'],
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
