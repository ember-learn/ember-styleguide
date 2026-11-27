/**
 * Ember.js below 6.1 needs the classic build. The scenarios with
 * ENABLE_COMPAT_BUILD add these files and dependencies.
 */
const compatFiles = {
  'ember-cli-build.cjs': `const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { compatBuild } = require('@embroider/compat');
module.exports = async function (defaults) {
  const { buildOnce } = await import('@embroider/vite');
  let app = new EmberApp(defaults);
  return compatBuild(app, buildOnce);
};`,
  'config/optional-features.json': JSON.stringify({
    'application-template-wrapper': false,
    'default-async-observers': true,
    'jquery-integration': false,
    'template-only-glimmer-components': true,
    'no-implicit-route-model': true,
  }),
};

const compatDeps = {
  '@embroider/compat': '^4.0.3',
  'ember-cli': '^5.12.0',
  'ember-auto-import': '^2.10.0',
  '@ember/optional-features': '^2.2.0',
};

function compat(name, emberSource) {
  return {
    name,
    npm: {
      devDependencies: {
        'ember-source': emberSource,
        ...compatDeps,
      },
    },
    env: {
      ENABLE_COMPAT_BUILD: true,
    },
    files: compatFiles,
  };
}

function modern(name, emberSource) {
  return {
    name,
    npm: {
      devDependencies: {
        'ember-source': emberSource,
      },
    },
  };
}

export default {
  scenarios: [
    compat('ember-lts-4.12', '~4.12.0'),
    compat('ember-lts-5.4', '~5.4.0'),
    compat('ember-lts-5.8', '~5.8.0'),
    compat('ember-lts-5.12', '~5.12.0'),
    modern('ember-lts-6.4', 'npm:ember-source@~6.4.0'),
    modern('ember-lts-6.8', 'npm:ember-source@~6.8.0'),
    modern('ember-latest', 'npm:ember-source@latest'),
    modern('ember-beta', 'npm:ember-source@beta'),
    modern('ember-alpha', 'npm:ember-source@alpha'),
  ],
};
