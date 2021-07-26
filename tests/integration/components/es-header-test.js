/* eslint-disable prettier/prettier */
import { click, render } from '@ember/test-helpers';
import { setProperties } from '@ember/object';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const customHomeUrl = 'https://github.com/emberjs';

module('Integration | Component | es header', function(hooks) {
  setupRenderingTest(hooks);

  test('it uses the header HTML element with correct attributes', async function(assert) {
    await render(hbs`<EsHeader/>`);

    assert.dom('header').exists({ count: 1 });
    assert.dom('header').hasClass('es-header');
  });

  test('it renders the logo', async function(assert) {
    await render(hbs`<EsHeader/>`);

    assert.dom('.navbar-brand').hasAttribute('src', '/images/ember-logo.svg');
  });

  test('it renders the link to the Ember homepage by default', async function(assert) {
    await render(hbs`<EsHeader/>`);

    assert.dom('.navbar-brand-wrapper').hasAttribute('href', 'https://www.emberjs.com');
  });

  test('it renders a link to a custom homepage', async function(assert) {
    setProperties(this, { customHomeUrl });
    await render(hbs`<EsHeader @home={{customHomeUrl}} />`);

    assert.dom('.navbar-brand-wrapper').hasAttribute('href', customHomeUrl);
  });

  test('it renders custom content at the end', async function(assert) {
    await render(hbs`
      <EsHeader>
        Custom content
      </EsHeader>
    `);

    assert.dom('.navbar-end').containsText('Custom content');
  });

  test('it renders the navbar collapsed by default', async function(assert) {
    await render(hbs`<EsHeader/>`);

    assert.dom('.es-navbar').doesNotHaveClass('navbar-expanded');
    assert.dom('.navbar-toggler').containsText('Show Site Navigation');
  });

  test('it toggles the navbar when click the toggler', async function(assert) {
    await render(hbs`<EsHeader/>`);

    await click('.navbar-toggler');

    assert.dom('.es-navbar').hasClass('navbar-expanded');
    assert.dom('.navbar-toggler').containsText('Hide Site Navigation');

    await click('.navbar-toggler');

    assert.dom('.es-navbar').doesNotHaveClass('navbar-expanded');
    assert.dom('.navbar-toggler').containsText('Show Site Navigation');
  });
});
