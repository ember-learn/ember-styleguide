import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';

module('Acceptance | visual regression', function(hooks) {
  setupApplicationTest(hooks);

  test(`visiting visual regressions with Percy`, async function(assert) {
    assert.expect(0);

    const pages = [
      'es-aside',
      'es-footer',
      'es-header',
      'es-main',
      'es-accordion',
      'es-form',
      'es-ulist',
      'es-blog-heading',
      'es-button',
      'es-buttonbar',
      'es-card',
      'es-codesample',
      'es-datatable',
      'es-heading',
      'es-navbar',
      'es-note',
      'es-search',
    ]

    await pages.reduce(async (prev, componentName) => {
      await prev;

      await visit(`components/${componentName}`);

      await percySnapshot(componentName);

    }, Promise.resolve());
  });
});
