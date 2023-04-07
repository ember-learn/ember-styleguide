import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | es-pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
    <EsPagination @showPrevious={{true}} @showNext={{true}}>
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
  test('it renders only previous', async function (assert) {
    await render(hbs`
    <EsPagination @showPrevious={{true}} @showNext={{false}}>
      <:previous>
        Newer articles
      </:previous>
      <:next>
        Older articles
      </:next>
    </EsPagination>
    `);

    assert.dom(this.element).hasText('Newer articles');
    assert.dom(this.element).doesNotIncludeText('Older articles');
  });
  test('it renders only next', async function (assert) {
    await render(hbs`
    <EsPagination @showPrevious={{false}} @showNext={{true}}>
      <:previous>
        Newer articles
      </:previous>
      <:next>
        Older articles
      </:next>
    </EsPagination>
    `);

    assert.dom(this.element).hasText('Older articles');
    assert.dom(this.element).doesNotIncludeText('Newer articles');
  });
});
