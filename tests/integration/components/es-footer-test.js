import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<EsFooter/>`);

    const footerSocialLinks = document.querySelectorAll('.footer-social a');
    const footerContribtuionsLinks = document.querySelectorAll('.footer-contributions .contributor');
    const footer = document.querySelector('.footer');
    const footerStyle = window.getComputedStyle(footer, null);
    const footerBgColor = footerStyle.getPropertyValue('background-color');

    assert.equal(footerSocialLinks.length, 3, 'social links are loading');
    assert.equal(footerContribtuionsLinks.length, 4, 'contributors links are loading');
    assert.equal(footerBgColor, 'rgb(242, 236, 233)', 'background color is rendering');
  });
});
