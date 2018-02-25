import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-ulist/text', 'Integration | Component | es ulist/text', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-ulist/text}}`);

  assert.equal(this.$().text().trim(), '');

  const item = {
    text: 'Component text'
  }
  this.set('item', item);
  // Template block usage:
  this.render(hbs`
    {{es-ulist/text item=item}}
  `);
  assert.equal(this.$('.es-ulist-text').text().trim(), item.text,'template block text');
});
