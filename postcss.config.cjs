'use strict';

const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssUrl = require('postcss-url');

module.exports = {
  plugins: [
    postcssImport(),
    /**
     * The stylesheets refer to their fonts and images by relative paths, so the app's bundler finds them next to dist/styles.css.
     */
    postcssUrl({ url: 'copy', assetsPath: 'assets', useHash: false }),
    postcssPresetEnv({
      stage: 3,
      features: { 'nesting-rules': true },
    }),
  ],
};
