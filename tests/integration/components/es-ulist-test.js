import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-ulist', 'Integration | Component | es ulist', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-ulist}}`);

  assert.equal(this.$().text().trim(), '');
});

skip('the list is populated', function(){
  
});

skip('a list with images renders the images correctly', function(){ 

});

skip('the id value of the list title matches the value in the aria-describedby property on the list element', function(){

});

skip('when hasLink is set to true, a link element renders', function(){

});