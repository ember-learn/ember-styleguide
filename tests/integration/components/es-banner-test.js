import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | es-banner', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EsBanner />`);

    assert.equal(this.element.textContent.trim(), 'Important Message');

    // Template block usage:
    await render(hbs`
      <EsBanner>
        template block text
      </EsBanner>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
