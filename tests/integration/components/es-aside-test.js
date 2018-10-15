import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es aside', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{es-aside}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#es-aside}}
        template block text
      {{/es-aside}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
