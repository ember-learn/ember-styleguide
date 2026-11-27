'use strict';

module.exports = {
  plugins: [
    [
      require.resolve('babel-plugin-ember-template-compilation'),
      {
        enableLegacyModules: [
          'ember-cli-htmlbars',
          'htmlbars-inline-precompile',
        ],
        targetFormat: 'hbs',
      },
    ],
    [
      require.resolve('decorator-transforms'),
      {
        runtime: { import: 'decorator-transforms/runtime' },
      },
    ],
    require.resolve('ember-concurrency/async-arrow-task-transform'),
  ],
};
