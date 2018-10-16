import { render } from '@ember/test-helpers';
import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es ulist', function(hooks){
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{es-ulist}}`);

    assert.dom('*').hasText('');
  });

  skip('the list is populated', function(){

  });

  skip('a list with images renders the images correctly', function(){

  });

  skip('the id value of the list title matches the value in the aria-describedby property on the list element', function(){

  });

  skip('when hasLink is set to true, a link element renders', function(){

  });
});
