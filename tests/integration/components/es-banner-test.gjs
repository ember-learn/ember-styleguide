import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import EsBanner from 'ember-styleguide/components/es-banner';

module('Integration | Component | es-banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <EsBanner>
          I have an announcement to make
        </EsBanner>
      </template>,
    );

    assert
      .dom('[data-test-es-banner]')
      .hasText('I have an announcement to make', 'We see the correct message');
  });
});
