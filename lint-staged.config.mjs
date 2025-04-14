/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Config}
 */
export default {
  '**/*.{ts,tsx,mjs}': (files) => {
    return files.map((file) => `npx eslint ${file} --fix`);
  },
};
