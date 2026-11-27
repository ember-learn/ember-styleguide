import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import EsPagination from 'ember-styleguide/components/es-pagination';

module('Integration | Component | es-pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <EsPagination @showPrevious={{true}} @showNext={{true}}>
          <:previous>
            Newer articles
          </:previous>
          <:next>
            Older articles
          </:next>
        </EsPagination>
      </template>,
    );

    assert.dom('.pagination-wrapper').hasText('Newer articles Older articles');
  });
  test('it renders only previous', async function (assert) {
    await render(
      <template>
        <EsPagination @showPrevious={{true}} @showNext={{false}}>
          <:previous>
            Newer articles
          </:previous>
          <:next>
            Older articles
          </:next>
        </EsPagination>
      </template>,
    );

    assert.dom('.pagination-wrapper').hasText('Newer articles');
    assert.dom('.pagination-wrapper').doesNotIncludeText('Older articles');
  });
  test('it renders only next', async function (assert) {
    await render(
      <template>
        <EsPagination @showPrevious={{false}} @showNext={{true}}>
          <:previous>
            Newer articles
          </:previous>
          <:next>
            Older articles
          </:next>
        </EsPagination>
      </template>,
    );

    assert.dom('.pagination-wrapper').hasText('Older articles');
    assert.dom('.pagination-wrapper').doesNotIncludeText('Newer articles');
  });
});
