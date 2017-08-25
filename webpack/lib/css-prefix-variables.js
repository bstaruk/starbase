const loaderUtils = require('loader-utils');

module.exports = function cssPrefixVariables(content) {
  const options = loaderUtils.getOptions(this);
  if (options.path) {
    this.cacheable();
    return `@import url("${options.path}");\n\n${content}`;
  } else {
    return content;
  }
};
