module.exports = {
  "**/*.ts": (files) => {
    return files.map((file) => `npx eslint ${file} --fix`);
  },
  "**/*.tsx": (files) => {
    return files.map((file) => `npx eslint ${file} --fix`);
  },
  "*/**.scss": (files) => {
    return files.map((file) => `npx stylelint ${file} --fix`);
  },
};
