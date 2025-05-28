/* eslint-disable prettier/prettier */
'use strict';

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-order'
  ],
  rules: {
    // Disables this rule to allow case agnostic color hex values
    'color-hex-case': null,
    // Require the long version of hex colors
    'color-hex-length': 'long',
    // Disallow ids
    'selector-max-id': 0,
    // Require that color, background-color, etc use variables for colors, instead of direct values
    'scale-unlimited/declaration-strict-value': [
      ['/color/'] // We can enforce variables for font-size, margin, etc as well by adding here
    ],
  }
};
