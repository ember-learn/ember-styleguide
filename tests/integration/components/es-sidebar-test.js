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

  test('it has the correct styles when in a .sidebar-container', async function (assert) {
    await render(hbs`
      <div class="sidebar-container">
        <EsSidebar>Test</EsSidebar>
      </div>
    `);

    assert.dom('.sidebar-container .es-sidebar').hasStyle({
      width: '256px',
    });

    await render(hbs`
      <div class="sidebar-container">
        <div data-test-content-left>Content left</div>
        <EsSidebar>Test</EsSidebar>
      </div>
    `);

    assert.dom('[data-test-content-left]').hasStyle({
      width: '684px',
    });
    assert.dom('.sidebar-container .es-sidebar').hasStyle({
      width: '256px',
      margin: '0px',
    });

    await render(hbs`
      <div class="sidebar-container">
        <EsSidebar>Test</EsSidebar>
        <div data-test-content-right>Content right</div>
      </div>
    `);

    assert.dom('.sidebar-container .es-sidebar').hasStyle({
      width: '256px',
      margin: '0px',
    });
    assert.dom('[data-test-content-right]').hasStyle({
      width: '684px',
    });
  });
});
