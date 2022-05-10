import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | es-banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <EsBanner>
        I have an announcement to make
      </EsBanner>
    `);

    assert
      .dom('[data-test-es-banner]')
      .hasText('I have an announcement to make', 'We see the correct message');
  });
});
