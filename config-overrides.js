const path = require('path');
const { override, fixBabelImports, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('babel-plugin-styled-components'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
