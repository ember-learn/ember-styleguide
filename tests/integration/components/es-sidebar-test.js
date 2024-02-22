import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | es-sidebar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly in desktop mode', async function (assert) {
    await render(hbs`<EsSidebar>Test</EsSidebar>`);

    assert.dom('.es-sidebar .es-sidebar-content').hasText('Test');
    assert.dom('.es-sidebar-toggle').exists();
    assert.dom('.es-sidebar-toggle').isNotVisible();
    assert.dom('.es-sidebar-close').exists();
    assert.dom('.es-sidebar-close').isNotVisible();
  });

  test('it opens/closes', async function (assert) {
    await render(hbs`<EsSidebar>Test</EsSidebar>`);

    assert.dom('.es-sidebar').hasAttribute('aria-expanded', 'false');

    await click('.es-sidebar-toggle');
    assert.dom('.es-sidebar').hasAttribute('aria-expanded', 'true');

    await click('.es-sidebar-close');
    assert.dom('.es-sidebar').hasAttribute('aria-expanded', 'false');
  });
});
