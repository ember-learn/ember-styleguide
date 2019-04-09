'use strict';
const Funnel = require('broccoli-funnel');
const path = require('path');

const CssImport = require('postcss-import')
const PresetEnv = require('postcss-preset-env');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  options: {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: CssImport },
          {
            module: PresetEnv,
            options: {
              stage: 3,
              features: { 'nesting-rules': true }
            }
          }
        ]
      }
    },

    svgJar: {
      sourceDirs: [
        'public',
        'node_modules/ember-styleguide/public',
        'tests/dummy/public'
      ]
    },
  },

  treeForPublic: function() {
    return new Funnel(path.join(this.root, 'public'));
  },

  contentFor: function(type) {
    if (type === 'head') {
      // preload the most common fonts for modern browsers
      return `<link rel="preload" as="font" type="font/woff2" href="/fonts/open-sans-v16-latin-regular.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/open-sans-v16-latin-300.woff2" crossorigin>`;
    }

    return '';
  }
};
