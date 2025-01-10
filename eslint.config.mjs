import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('prettier', 'next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      // Add TypeScript-specific rules here
      '@typescript-eslint/no-unused-vars': 'warn',
      // Tailwind CSS rules
      'tailwindcss/classnames-order': 'warn', // Enforce class name ordering
      'tailwindcss/enforces-negative-arbitrary-values': 'warn', // Ensure proper arbitrary negative values
      'tailwindcss/no-contradicting-classname': 'error', // Disallow contradicting class names
    },
  },
];

export default eslintConfig;
