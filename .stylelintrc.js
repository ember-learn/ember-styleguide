module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-declaration-strict-value',
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    // Disables this rule to allow case agnostic color hex values
    'color-hex-case': null,
    // Require the long version of hex colors
    'color-hex-length': 'long',
    // Disallow ids
    'selector-max-id': 0,
    // Enforce alphabetical ordering of properties
    'order/properties-alphabetical-order': true,
    // Require that color, background-color, etc use variables for colors, instead of direct values
    'scale-unlimited/declaration-strict-value': [
      ['/color/'] // We can enforce variables for font-size, margin, etc as well by adding here
    ],
    // Enforce that variables are all lowercase and dasherized
    'scss/dollar-variable-pattern': '^[a-z][a-z-]+$'
  }
};
