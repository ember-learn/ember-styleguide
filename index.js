/* eslint-disable prettier/prettier */
'use strict';
const Funnel = require('broccoli-funnel');
const path = require('path');
const CssImport = require('postcss-import')
const PresetEnv = require('postcss-preset-env');

module.exports = {
  name: require('./package').name,

  options: {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: CssImport },
          {
            module: PresetEnv,
            options: { stage: 3 }
          }
        ]
      }
    }
  },

  treeForPublic: function() {
    return new Funnel(path.join(this.root, 'public'));
  },

  contentFor: function(type) {
    if (type === 'head') {
      // preload the most common fonts for modern browsers
      return `<link rel="preload" as="font" type="font/woff2" href="/fonts/Inter-roman.var.woff2?v=3.15" crossorigin>`;
    }

    return '';
  },
};
