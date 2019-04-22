'use strict';
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

const CssImport = require('postcss-import')
const PresetEnv = require('postcss-preset-env');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    svgJar: {
      sourceDirs: [
        'public',
        'addon/public',
        'node_modules/ember-styleguide/public',
        'node_modules/ember-cli-addon-docs/public',
        'tests/dummy/public'
      ]
    },
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
    'ember-cli-markdown-templates': {
      syntaxHighlight: true,
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('node_modules/highlightjs/styles/default.css');

  return app.toTree();
};
