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
    svgJar: {
      sourceDirs: [
        'public',
        'node_modules/ember-styleguide/public',
        'tests/dummy/public'
      ]
    },
    googleFonts: [
      'Roboto:400,700'
    ],
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: CssImport },
          { module: PresetEnv({ stage: 3 }) }
        ]
      }
    }
  },

  treeForPublic: function() {
    return new Funnel(path.join(this.root, 'public'));
  },
};
