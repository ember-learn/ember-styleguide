import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-note', 'Integration | Component | es note', {
  integration: true
});

test('it renders', function(assert) {
  const testHeading = 'Tomster says... Zoey says...';

  this.render(hbs`{{es-note}}`);

  assert.ok(
    testHeading.includes(this.$('.cta-note-heading').text().trim()),
    'displays heading'
  );
  assert.equal(
    this.$('.cta-note-message').text().trim(),
    'Hello!!! No message provided.'
  );

  this.render(hbs`
    {{#es-note}}
      template block text
    {{/es-note}}
  `);

  assert.ok(
    testHeading.includes(this.$('.cta-note-heading').text().trim()),
    'displays heading'
  );

  assert.equal(
    this.$('.cta-note-message').text().trim(),
    'template block text'
  );
});

test('out of 2 mascots randomly selects each at least 1 in 10 renders', function(assert) {
  const mascots = [
    { image: 'image/tomster', name: 'Tomster' },
    { image: 'image/zoey', name: 'Zoey' },
  ];
  const renderedNames = [];

  this.setProperties({
    mascots,
  });

  for (let i = 0; i < 10; i++) {
    let name;

    this.render(hbs`{{es-note mascots=mascots}}`);
    name = this.$('.cta-note-heading').text().trim().split(' ')[0];

    renderedNames.push(name);
  }

  assert.ok(
    renderedNames.includes('Tomster'),
    'Tomster rendered'
  );

  assert.ok(
    renderedNames.includes('Zoey'),
    'Zoey rendered'
  );

});
