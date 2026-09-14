import eslint from '@eslint/js';
import pluginJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from '@eslint-react/eslint-plugin';
import globals from 'globals';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  pluginJs.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...pluginReact.configs['strict-typescript'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  eslintPluginPrettierRecommended,
);
