import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | progress bar', function (hooks) {
  setupApplicationTest(hooks);

  test('progress bar should not causea a transition abort error', async function (assert) {
    await visit('/');

    await click('[data-test-basic-route]');

    assert.equal(currentURL(), '/fancy');

    await visit('/');

    await click('[data-test-slow-route]');

    assert.equal(currentURL(), '/fancy');
  });
});
