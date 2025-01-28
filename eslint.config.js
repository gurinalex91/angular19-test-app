import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules', '.angular/cache/**/*'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules', '.angular/cache/**/*'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
];
