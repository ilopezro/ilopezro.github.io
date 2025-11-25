import eslint from '@eslint/js';
import pluginJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  pluginJs.configs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  {
    files: ['**/*.{ts,tsx}'],
    ...pluginReact.configs.flat.all,
    languageOptions: {
      ...pluginReact.configs.flat.all.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.tsx'],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
);
