import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es text', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(5);

    await render(hbs`{{es-text}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#es-text}}
         template block text
      {{/es-text}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');

    assert.equal(
      this.element.querySelector('.es-text').tagName.toLowerCase(),
      'p',
      'has "p" tagName by default'
    );

    this.set('tagName', 'div');
    await render(hbs`{{es-text tagName='div'}}`);
    assert.equal(
      this.element.querySelector('.es-text').tagName.toLowerCase(),
      'div',
      'can change tagName to "div"'
    );

    this.set('tagName', 'span');
    await render(hbs`{{es-text tagName='span'}}`);
    assert.equal(
      this.element.querySelector('.es-text').tagName.toLowerCase(),
      'span',
      'can change tagName to "span"'
    );
  });
});
