'use strict';
const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const path = require('path');

module.exports = {
  name: 'ember-styleguide',
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
  },

  included(app, parentAddon) {
    let target = (app || parentAddon);
    target.options = target.options || {};

    const defaultEmberBootStrapOptions = {
      bootstrapVersion: 4,
      importBootstrapFont: false,
      importBootstrapCSS: false
    };
    target.options['ember-bootstrap'] = target.options['ember-bootstrap'] || defaultEmberBootStrapOptions;

    this.checkPreprocessor();

    this._super.included.apply(this, arguments);
  },

  treeForStyles() {
    return new Funnel(this.getEmberStyleguideStylesPath(), {
      destDir: 'ember-styleguide'
    });
  },

  treeForAddonStyles(tree) {
    let bootstrapTree = new Funnel(this.getBootstrapStylesPath(), {
      destDir: 'ember-bootstrap'
    });
    return mergeTrees([bootstrapTree, tree]);
  },

  treeForPublic: function() {
    return new Funnel(path.join(this.root, 'public'));
  },

  getEmberStyleguideStylesPath() {
    let pkgPath = path.dirname(__filename);
    return path.join(pkgPath, 'addon', 'styles');
  },

  getBootstrapStylesPath() {
    let pkgPath = path.dirname(require.resolve(`bootstrap/package.json`));
    return path.join(pkgPath, 'scss');
  },

  checkPreprocessor() {
    if (!this.app.project.findAddonByName('ember-cli-sass')) {
      this.ui.writeLine('ember-styleguide: npm package "ember-cli-sass" is missing. Consider using it to use `@import \'ember-styleguide/globals/variables\'` in your styles.');
    }
  }
};
