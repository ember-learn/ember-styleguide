import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<EsFooter/>`);

    const footerSocialLinks = this.element.querySelectorAll('.footer-social a');
    const footerContribtuionsLinks = this.element.querySelectorAll('.footer-contributions a');

    assert.equal(footerSocialLinks.length, 3, 'social links are loading');
    assert.equal(footerContribtuionsLinks.length, 4, 'contributors links are loading');
  });
});
