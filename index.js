'use strict';
const Funnel = require('broccoli-funnel');
const path = require('path');
const nodeSass = require('node-sass');

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
  },

  included(app, parentAddon) {
    let target = (app || parentAddon);
    target.options = target.options || {};

    target.options.sassOptions = target.options.sassOptions || { implementation: nodeSass };

    this.checkPreprocessor();

    this._super.included.apply(this, arguments);
  },

  treeForStyles() {
    return new Funnel(this.getEmberStyleguideStylesPath(), {
      destDir: 'ember-styleguide'
    });
  },

  treeForPublic: function() {
    return new Funnel(path.join(this.root, 'public'));
  },

  getEmberStyleguideStylesPath() {
    let pkgPath = path.dirname(__filename);
    return path.join(pkgPath, 'addon', 'styles');
  },

  checkPreprocessor() {
    if (this.app && !this.app.project.findAddonByName('ember-cli-sass')) {
      this.ui.writeLine('ember-styleguide: npm package "ember-cli-sass" is missing. Consider using it to use `@import \'ember-styleguide/globals/variables\'` in your styles.');
    }
  }
};
