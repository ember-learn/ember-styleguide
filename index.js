'use strict';
const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');
const path = require('path');

module.exports = {
  name: 'ember-styleguide',

  included() {
    this._super.included.apply(this, arguments);
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
  }
};
