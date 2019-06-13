import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es buttonbar', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`<EsButtonbar />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <EsButtonbar>
        template block text
      </EsButtonbar>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
