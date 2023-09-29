module.exports = {
  // Lint & Prettify JS files
  '**/*.(js)': (filenames) => [
    `npx eslint ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Lint Sass
  '**/*.(scss)': (filenames) => [`npx stylelint ${filenames.join(' ')}`],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`,
};
