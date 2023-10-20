module.exports = function (/* environment */) {
  return {
    'field-guide': {
      name: 'Ember',
      tagLine: 'Ember Styleguide',
      logo: '/ember-logo.png',
      copyright:
        'Ember Field Guide is designed to document the [ember-styleguide](https://github.com/ember-learn/ember-styleguide) project. For more information view the [README](https://github.com/ember-learn/ember-styleguide),',
      github: 'https://github.com/ember-learn/ember-styleguide',
    },
  };
};

module.exports['ember-cli-build'] = {
  fingerprint: {
    extensions: ['js', 'css', 'map'],
  },
};

module.exports.fastbootDependencies = ['crypto'];
