module.exports = {
  "**/*.ts": (files) => {
    return files.map((file) => `yarn eslint ${file} --fix`);
  },
  "**/*.tsx": (files) => {
    return files.map((file) => `yarn eslint ${file} --fix`);
  },
  "*/**.scss": (files) => {
    return files.map((file) => `yarn stylelint ${file} --fix`);
  },
};
