/* eslint-disable qunit/no-assert-equal */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | es footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<EsFooter/>`);

    const footerSocialLinks = document.querySelectorAll('.footer-social a');
    const footerContribtuionsLinks = document.querySelectorAll(
      '.footer-contributions a',
    );

    assert.equal(footerSocialLinks.length, 4, 'social links are loading');
    assert.equal(
      footerContribtuionsLinks.length,
      5,
      'contributors links are loading',
    );
  });
});
