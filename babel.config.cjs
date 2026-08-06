'use strict';

/**
 * This babel.config is for local dev, testing, and linting.
 * For publishing, see babel.publish.config.cjs
 */
const { buildMacros } = require('@embroider/macros/babel');

const macros = buildMacros();

module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-ember-template-compilation'),
      {
        enableLegacyModules: [
          'ember-cli-htmlbars',
          'htmlbars-inline-precompile',
        ],
        transforms: [...macros.templateMacros],
      },
    ],
    [
      'module:decorator-transforms',
      {
        runtime: {
          import: require.resolve('decorator-transforms/runtime-esm'),
        },
      },
    ],
    require.resolve('ember-concurrency/async-arrow-task-transform'),
    ...macros.babelMacros,
  ],

  generatorOpts: {
    compact: false,
  },
};
