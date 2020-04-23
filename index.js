'use strict';
const Funnel = require('broccoli-funnel');
const path = require('path');

const CssImport = require('postcss-import');
const PresetEnv = require('postcss-preset-env');

const broccoliPostCSS = require('broccoli-postcss')
const mergeTrees = require('broccoli-merge-trees');
const funnel = require('broccoli-funnel');
const get = require('lodash.get');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  options: {
    svgJar: {
      sourceDirs: [
        'public/images/icons',
        'node_modules/ember-styleguide/public/images/icons',
        'tests/dummy/public/images/icons'
      ]
    },
  },

  treeForAddon() {
    var tree = this._super(...arguments);

    const addonWithoutStyles = funnel(tree, {
      exclude: ['**/*.css'],
    });

    const addonStyles = funnel(tree, {
      include: ['ember-styleguide.css']
    });

    // I don't know exactly why targets is private so I am using `get()` to make
    // sure that it isn't missing
    let overrideBrowserslist = get(this, 'app.project._targets.browsers');

    let processedStyles = broccoliPostCSS(addonStyles, {
      plugins: [
        CssImport({
          path: join(__dirname, 'addon', 'styles'),
        }),
        PresetEnv({
          stage: 3,
          features: { 'nesting-rules': true },
          overrideBrowserslist,
        })
      ]});

    return mergeTrees([addonWithoutStyles, processedStyles]);
  },

  treeForPublic: function() {
    return new Funnel(path.join(this.root, 'public'));
  },

  contentFor: function(type) {
    if (type === 'head') {
      const filesToPreload = [
        '/fonts/Inter-roman.var.woff2?v=3.11',
        '/fonts/Inter-Regular.woff2?v=3.11',
        '/fonts/Inter-SemiBold.woff2?v=3.11',
        '/fonts/Inter-ExtraLight-BETA.woff2?v=3.11',
      ];

      // preload the most common fonts for modern browsers
      return filesToPreload
        .map(file => `<link rel="preload" as="font" type="font/woff2" href="${file}" crossorigin>`)
        .join('\n');
    }

    return '';
  },
};
