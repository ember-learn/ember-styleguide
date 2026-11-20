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

// Ember 7 no longer publishes AMD bundles, so classic builds need current
// build tooling: https://deprecations.emberjs.com/id/using-amd-bundles
const modernBuildTooling = {
  devDependencies: {
    'ember-cli': '^7.0.0',
    'ember-cli-babel': '^8.3.2',
    'ember-cli-htmlbars': '^7.0.0',
    'ember-auto-import': '^2.13.1',
    // v2 addon; the v1 2.x release does not compile with ember-cli-babel 8
    'ember-load-initializers': '^3.0.0',
    // 4.x calls the removed `inject` from @ember/service; 6.x uses `service`
    'ember-cli-fastboot': '^6.0.0',
    // 8.x calls the removed `inject` at module eval; 9.x uses `service`
    'ember-page-title': '^9.0.0',
    // eagerly instantiates a service that calls the removed `inject`;
    // unused by the test app, and no release without `inject` exists
    'ember-scroll': null,
  },
  // overrides force the nested copies inside other v1 addons too
  overrides: {
    'ember-cli-babel': '^8.3.2',
    'ember-cli-htmlbars': '^7.0.0',
    'ember-auto-import': '^2.13.1',
  },
};
module.exports = async function () {
  return {
    packageManager: 'pnpm',
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
            ...modernBuildTooling.devDependencies,
          },
          pnpm: {
            overrides: {
              'ember-source': '$ember-source',
              ...modernBuildTooling.overrides,
            },
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            '@ember/string': '*',
            ...modernBuildTooling.devDependencies,
          },
          pnpm: {
            overrides: {
              'ember-source': '$ember-source',
              ...modernBuildTooling.overrides,
            },
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            '@ember/string': '*',
            ...modernBuildTooling.devDependencies,
          },
          pnpm: {
            overrides: {
              'ember-source': '$ember-source',
              ...modernBuildTooling.overrides,
            },
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
            ...modernBuildTooling.devDependencies,
          },
          pnpm: {
            overrides: {
              'ember-source': '$ember-source',
              ...modernBuildTooling.overrides,
            },
          },
        },
      },
    ],
  };
};
