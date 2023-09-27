module.exports = {
  '*.js': () => 'eslint --max-warnings=0',
  '*.scss': () => 'stylelint',
  '*.{js,json,md}': () => 'prettier --write',
};
