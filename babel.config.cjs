'use strict';

/**
 * This babel.config is for local dev, testing, and linting.
 * For publishing, see babel.publish.config.cjs
 */
const { buildMacros } = require('@embroider/macros/babel');

const macros = buildMacros();

/**
 * The try scenarios for Ember.js below 6.1 set ENABLE_COMPAT_BUILD.
 * Only those scenarios install `@embroider/compat`.
 */
const compat = process.env.ENABLE_COMPAT_BUILD
  ? // eslint-disable-next-line n/no-missing-require
    require('@embroider/compat/babel')
  : undefined;

module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-ember-template-compilation'),
      {
        enableLegacyModules: [
          'ember-cli-htmlbars',
          'htmlbars-inline-precompile',
        ],
        transforms: compat
          ? compat.templateCompatSupport()
          : macros.templateMacros,
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
    ...(compat ? compat.babelCompatSupport() : macros.babelMacros),
  ],

  generatorOpts: {
    compact: false,
  },
};
