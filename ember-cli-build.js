/* eslint-disable prettier/prettier */
'use strict';
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    fingerprint: {
      extensions: ['js', 'css', 'map']
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
    // required until https://github.com/ember-cli/ember-cli/issues/8448 is fixed
    'ember-prism': {
      components: [
        'apacheconf',
        'bash',
        'css',
        'handlebars',
        'http',
        'javascript',
        'json',
        'markup-templating',
        'ruby',
        'scss'
      ],

      plugins: ['line-numbers', 'normalize-whitespace']
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
