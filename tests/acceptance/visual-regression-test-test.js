import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';

async function renderFromToc(tableOfContents, path = "") {
  for (const item of tableOfContents) {
    if (!item.pages || item.pages.length === 0) {
      await visit(path + item.title);
      await percySnapshot(path + item.title);
    } else {
      await renderFromToc(item.pages, `${path + item.title}/`);
    }
  }
}

module('Acceptance | visual regression test', function(hooks) {
  setupApplicationTest(hooks);

  test(`visiting visual regressions with Percy`, async function(assert) {
    assert.expect(0);
    await visit('/');

    let tableOfContents = this.owner.lookup('controller:application').model;

    await renderFromToc(tableOfContents);
  });
});
