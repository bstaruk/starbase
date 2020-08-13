const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
  },
  globals: {
    document: true,
    window: true,
    location: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.config.base.js',
      },
    },
  },
};
