module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['import'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'no-new': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0
  },
  globals: {
    document: true,
    window: true,
    location: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack/webpack.config.base.js'
      }
    }
  }
};
