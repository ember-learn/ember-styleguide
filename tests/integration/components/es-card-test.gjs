import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import EsCard from '#src/components/es-card.gjs';

module('Integration | Component | es card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><EsCard /></template>);
    assert.dom('.card').exists();

    // Template block usage:
    await render(
      <template>
        <EsCard>
          template block text
        </EsCard>
      </template>,
    );

    assert.dom('.card').hasText('template block text');
  });
});
