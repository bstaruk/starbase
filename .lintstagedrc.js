module.exports = {
  // Lint & Prettify TS files
  '**/*.ts': (filenames) => [
    'tsc --noEmit',
    `eslint ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
};
