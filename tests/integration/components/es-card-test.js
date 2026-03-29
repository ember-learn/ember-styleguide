import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<EsCard />`);
    assert.dom('.card').exists();

    // Template block usage:
    await render(hbs`
      <EsCard>
        template block text
      </EsCard>
    `);

    assert.dom('.card').hasText('template block text');
  });
});
