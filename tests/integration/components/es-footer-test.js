import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-footer', 'Integration | Component | es footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-footer}}`);


  assert.equal(this.$('.footer-social').children().length, 3, 'social links are loading');
  assert.equal(this.$('.footer-contributions').children().length, 2, 'contributors links are loading');
  assert.equal(this.$('.footer.responsive').css('background-color'), 'rgb(242, 236, 233)', 'background color is rendering');

});
