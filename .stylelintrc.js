module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-sass-guidelines',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'max-nesting-depth': [
      5,
      { ignore: ['blockless-at-rules', 'pseudo-classes'] },
    ],
  },
};
