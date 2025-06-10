import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescript
    },
    rules: {
      // React Hooks Rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Refresh Rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],

      // TypeScript Rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/no-this-alias': 'warn',
      '@typescript-eslint/no-extra-semi': 'warn',
      '@typescript-eslint/no-extra-parens': 'warn',
      '@typescript-eslint/no-extra-boolean-cast': 'warn',
      '@typescript-eslint/no-extra-non-null-assertion': 'warn',
      '@typescript-eslint/no-extra-semi': 'warn',
      '@typescript-eslint/no-extra-parens': 'warn',
      '@typescript-eslint/no-extra-boolean-cast': 'warn',
      '@typescript-eslint/no-extra-non-null-assertion': 'warn',

      // General Rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'off', // Using TypeScript's no-unused-vars
      'no-undef': 'off', // Using TypeScript's no-undef
      'no-unused-expressions': 'warn',
      'no-unused-labels': 'warn',
      'no-unused-private-class-members': 'warn',
      'no-unused-vars': 'off', // Using TypeScript's no-unused-vars
      'no-use-before-define': 'off', // Using TypeScript's no-use-before-define
      'no-var': 'error',
      'prefer-const': 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'warn',
      'require-await': 'warn',
      'require-yield': 'warn',
      'rest-spread-spacing': 'warn',
      'semi': ['warn', 'always'],
      'semi-spacing': 'warn',
      'semi-style': 'warn',
      'sort-imports': 'off',
      'sort-keys': 'off',
      'sort-vars': 'off',
      'space-before-blocks': 'warn',
      'space-before-function-paren': 'warn',
      'space-in-parens': 'warn',
      'space-infix-ops': 'warn',
      'space-unary-ops': 'warn',
      'spaced-comment': 'warn',
      'strict': 'off',
      'switch-colon-spacing': 'warn',
      'symbol-description': 'warn',
      'template-curly-spacing': 'warn',
      'template-tag-spacing': 'warn',
      'unicode-bom': 'warn',
      'use-isnan': 'warn',
      'valid-jsdoc': 'off',
      'valid-typeof': 'warn',
      'vars-on-top': 'warn',
      'wrap-iife': 'warn',
      'wrap-regex': 'warn',
      'yield-star-spacing': 'warn',
      'yoda': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
