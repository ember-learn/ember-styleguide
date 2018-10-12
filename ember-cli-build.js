'use strict';
const nodeSass = require('node-sass');
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sassOptions: {
      implementation: nodeSass
    },
    svgJar: {
      sourceDirs: [
        'public',
        'addon/public',
        'node_modules/ember-styleguide/public',
        'node_modules/ember-cli-addon-docs/public',
        'tests/dummy/public'
      ]
    },
    'ember-cli-uglify': {
      uglify: {
        compress: {
          collapse_vars: false // TODO: remove this once this is resolved https://github.com/ember-cli/ember-cli-uglify/issues/49
        },
      },
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
