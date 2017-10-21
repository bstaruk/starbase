const path = require('path');

module.exports = function pathsHelper(a) {
  const paths = {
    app: path.resolve(__dirname, '../../src/app'),
    assets: path.resolve(__dirname, '../../dist/assets'),
    base: path.resolve(__dirname, '../../'),
    components: path.resolve(__dirname, '../../src/components'),
    src: path.resolve(__dirname, '../../src'),
    static: path.resolve(__dirname, '../../src/static'),
    styles: path.resolve(__dirname, '../../src/styles'),
    variables: path.resolve(__dirname, '../../src/variables/variables.css')
  };

  return paths[a];
};
