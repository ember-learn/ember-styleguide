'use strict';

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-declaration-strict-value', 'stylelint-order'],
  rules: {
    // Require the long version of hex colors
    'color-hex-length': 'long',
    // Disallow ids
    'selector-max-id': 0,
    // Require that color, background-color, etc use variables for colors, instead of direct values
    'scale-unlimited/declaration-strict-value': [
      ['/color$/'], // We can enforce variables for font-size, margin, etc as well by adding here
      { ignoreKeywords: ['inherit'] },
    ],
  },
  overrides: [
    {
      // the docs app styles BEM classes from ember-repl and its own demos
      files: ['app/**/*.css'],
      rules: {
        'selector-class-pattern': [
          '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?$',
        ],
      },
    },
  ],
};
