import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | es card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`<EsCard />`);
    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      <EsCard>
        template block text
      </EsCard>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
