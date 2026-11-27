import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import EsCard from 'ember-styleguide/components/es-card';

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
