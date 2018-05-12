const loaderUtils = require('loader-utils');

module.exports = function cssPrefixVariables(content) {
  const options = loaderUtils.getOptions(this);

  if (options.path) {
    this.cacheable();

    // check if first line of content is another import
    const lineBreak = content.substr(0, 1) === '@' ? '\n' : '\n\n';
    return `@import url("${options.path}");${lineBreak}${content}`;
  }

  return content;
};
