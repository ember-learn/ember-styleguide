import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | es-pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
    <EsPagination>
      <:previous>
        Newer articles
      </:previous>
      <:next>
        Older articles
      </:next>
    </EsPagination>
    `);

    assert.dom(this.element).hasText('Newer articles Older articles');
  });
});
