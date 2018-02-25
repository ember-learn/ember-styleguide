import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-ulist/link', 'Integration | Component | es ulist/link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-ulist/link}}`);

  assert.equal(this.$().text().trim(), '');

  const item = {
    text: 'Some text',
    route: 'learn'
  }

  this.set('item', item);
  // Template block usage:
  this.render(hbs`
    {{es-ulist/link item=item}}    
  `);

  assert.equal(this.$('.link-text').text().trim(), item.text, 'Link text rendered');
});
