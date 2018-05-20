'use strict';
const defaults = {
  theme: {
    defaultTheme: 'theme-tomster',
    themes: [
      'theme-tomster',
      'theme-zoey'
    ]
  }
};
const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const path = require('path');

module.exports = {
  name: 'ember-styleguide',

  included: function(app) {
    this._super.included.apply(this, arguments);

    defaults.theme.themes.forEach(function(theme) {
      if (app.options.outputPaths.app) {
        app
          .options
          .outputPaths
          .app
          .css[theme] = `/assets/${theme}.css`;
      }
    });
  },

  treeForAddonStyles(tree) {
    let bootstrapTree = new Funnel(this.getBootstrapStylesPath(), {
      destDir: 'ember-bootstrap'
    });
    return mergeTrees([bootstrapTree, tree]);
  },

  getBootstrapStylesPath() {
    let pkgPath = path.dirname(require.resolve(`bootstrap/package.json`));
    return path.join(pkgPath, 'scss');
  },
  
  config: function() {
    return defaults;
  }
};
