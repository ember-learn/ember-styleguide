import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  blur,
  click,
  render,
  settled,
  triggerKeyEvent,
} from '@ember/test-helpers';
import EsHeaderNavbarLink from 'ember-styleguide/components/es-header-navbar-link';

const community = {
  type: 'dropdown',
  name: 'Community',
  items: [
    { type: 'link', href: '/meetups', name: 'Meetups' },
    { type: 'divider' },
    { type: 'link', href: '/forum', name: 'Forum' },
  ],
};

const docs = {
  type: 'dropdown',
  name: 'Docs',
  items: [{ type: 'link', href: '/guides', name: 'Guides' }],
};

const toggle = '.navbar-list-item-dropdown-toggle';
const firstItem = '.navbar-dropdown-list-item-link';

module('Integration | Component | es-header-navbar-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a plain link', async function (assert) {
    const link = { type: 'link', href: '/blog', name: 'Blog' };

    await render(<template><EsHeaderNavbarLink @link={{link}} /></template>);

    assert.dom('.navbar-list-item-link').hasAttribute('href', '/blog');
    assert.dom(toggle).doesNotExist();
  });

  test('a mouse click opens the dropdown and leaves focus on the toggle', async function (assert) {
    await render(
      <template><EsHeaderNavbarLink @link={{community}} /></template>,
    );

    assert.dom(toggle).hasAttribute('aria-expanded', 'false');
    assert.dom('.navbar-dropdown-list').doesNotExist();

    await click(toggle, { detail: 1 });

    assert.dom(toggle).hasAttribute('aria-expanded', 'true');
    assert.dom('.navbar-dropdown-list-item').exists({ count: 2 });
    assert.dom('.separator').exists({ count: 1 });
    assert.dom(firstItem).isNotFocused();
  });

  test('a keyboard click opens the dropdown and focuses the first item', async function (assert) {
    await render(
      <template><EsHeaderNavbarLink @link={{community}} /></template>,
    );
    await click(toggle, { detail: 0 });

    assert.dom(firstItem).isFocused();
  });

  test('Escape closes the dropdown and focuses the toggle', async function (assert) {
    await render(
      <template><EsHeaderNavbarLink @link={{community}} /></template>,
    );
    await click(toggle, { detail: 0 });
    await triggerKeyEvent(firstItem, 'keydown', 'Escape');

    assert.dom('.navbar-dropdown-list').doesNotExist();
    assert.dom(toggle).hasAttribute('aria-expanded', 'false');
    assert.dom(toggle).isFocused();
  });

  test('focus that leaves the dropdown closes it', async function (assert) {
    await render(
      <template><EsHeaderNavbarLink @link={{community}} /></template>,
    );
    await click(toggle, { detail: 0 });
    await blur(firstItem);

    assert.dom('.navbar-dropdown-list').doesNotExist();
  });

  test('closing the dropdown from the navbar service removes the focused list', async function (assert) {
    await render(
      <template><EsHeaderNavbarLink @link={{community}} /></template>,
    );
    await click(toggle, { detail: 0 });

    assert.dom(firstItem).isFocused();

    this.owner.lookup('service:navbar').closePopupMenu();
    await settled();

    assert.dom('.navbar-dropdown-list').doesNotExist();
    assert.dom(toggle).hasAttribute('aria-expanded', 'false');
  });

  test('opening one dropdown closes the other', async function (assert) {
    await render(
      <template>
        <EsHeaderNavbarLink @link={{community}} />
        <EsHeaderNavbarLink @link={{docs}} />
      </template>,
    );

    let [communityToggle, docsToggle] = this.element.querySelectorAll(toggle);

    await click(communityToggle, { detail: 1 });
    assert.dom(communityToggle).hasAttribute('aria-expanded', 'true');

    await click(docsToggle, { detail: 1 });
    assert.dom(communityToggle).hasAttribute('aria-expanded', 'false');
    assert.dom(docsToggle).hasAttribute('aria-expanded', 'true');
  });
});
