export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended'],
  ignoreFiles: ['!**/*.css', 'node_modules'],
  rules: {
    /* Tailwind CSS Rules */
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'config'],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],

    /* Other Rules */
    'import-notation': null, // Allow string and url imports
  },
};
