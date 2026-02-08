import js from '@eslint/js';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import tanstackRouter from '@tanstack/eslint-plugin-router';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'src/routeTree.gen.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      tanstackQuery.configs['flat/recommended'],
      tanstackRouter.configs['flat/recommended'],
      jsxA11y.flatConfigs.recommended,
    ],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        node: true,
      },
    },
    rules: {
      'import/no-duplicates': 'warn',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{queries,utils}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '{atoms,molecules,organisms,templates}{,/**}',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]);
