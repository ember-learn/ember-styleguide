'use strict';

const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 3,
      features: { 'nesting-rules': true },
    }),
  ],
};
