'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

// Pins for embers older than 4.10: @glimmer/component 2 imports
// @ember/owner, which ember-source only ships since 4.10, so these
// scenarios stay on 1.x. ember-concurrency 4 still supports these embers
// and, unlike 2.x/3.x, exposes the async-arrow transform this addon uses.
const preOwnerEmber = {
  '@glimmer/component': '^1.1.2',
  'ember-concurrency': '^4.0.0',
};

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-lts-3.28',
        npm: {
          dependencies: {
            // @ember/test-helpers 2.x pulls test-waiters v3; keep the root
            // copy on v3 too so force-highlander unifies on one version
            // instead of wrapping mixed 3.x/4.x copies into a cycle
            '@ember/test-waiters': '^3.1.0',
            ...preOwnerEmber,
          },
          devDependencies: {
            'ember-source': '~3.28.0',
            'ember-cli': '~4.12.0',
            'ember-resolver': '^11.0.0',
            'ember-qunit': '^6.0.0',
            '@ember/test-helpers': '^2.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          dependencies: { ...preOwnerEmber },
          devDependencies: {
            'ember-source': '~4.4.0',
            'ember-resolver': '^11.0.0',
            'ember-qunit': '^7.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          dependencies: { ...preOwnerEmber },
          devDependencies: {
            'ember-source': '~4.8.0',
            'ember-resolver': '^11.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-lts-5.8',
        npm: {
          devDependencies: {
            'ember-source': '~5.8.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            '@ember/string': '*',
          },
          overrides: {
            'ember-source': '$ember-source',
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            '@ember/string': '*',
          },
          overrides: {
            'ember-source': '$ember-source',
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            '@ember/string': '*',
          },
          overrides: {
            'ember-source': '$ember-source',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
      {
        name: 'no-deprecations',
        npm: {
          devDependencies: {
            'ember-deprecation-error': '*',
          },
        },
      },
      {
        name: 'ember-release-no-deprecations',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            'ember-deprecation-error': '*',
            '@ember/string': '*',
          },
          overrides: {
            'ember-source': '$ember-source',
          },
        },
      },
    ],
  };
};
