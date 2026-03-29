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
      },
    ],
    [
      require.resolve('decorator-transforms'),
      {
        runtime: { import: 'decorator-transforms/runtime' },
      },
    ],
  ],
};
