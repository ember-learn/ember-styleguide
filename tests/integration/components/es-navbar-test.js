import { moduleForComponent, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-navbar', 'Integration | Component | es navbar', {
  integration: true
});

skip('regular navbar component renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-navbar}}`);

  assert.ok(true);
});

skip('block navbar component renders', function(assert) {
  
  // Template block usage:
  this.render(hbs`
    {{#es-navbar}}
      template block text
    {{/es-navbar}}
  `);

  assert.ok(true);
});
