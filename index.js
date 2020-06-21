'use strict';
const Funnel = require('broccoli-funnel');
const path = require('path');
const staticPostcssAddonTree = require('static-postcss-addon-tree');

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

    return staticPostcssAddonTree(tree, {
      addonName: 'ember-styleguide',
      addonFolder: __dirname,
      project: this.app.project
    });
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
