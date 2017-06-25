import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-header', 'Integration | Component | es header', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs `{{es-header}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs `
    {{#es-header}}
      template block text
    {{/es-header}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});

test('it uses the header html element', function(assert) {
    this.render(hbs `{{es-header}}`);
    assert.equal(this.$('header').length, 1, "the header uses the header html element!");
});

test('it has the role of banner', function(assert) {
    this.render(hbs `{{es-header}}`);
    assert.equal(this.$('header').attr('role'), 'banner', 'header has the role of banner');
});

//the class matches the component name
//but how do I make it so it just checks for the one of them?
test('it has the className es-header', function(assert) {
    this.render(hbs `{{es-header}}`);
    assert.equal(this.$('header').attr('class'), 'es-header ember-view', 'header has the class of es-header');
});