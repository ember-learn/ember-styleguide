import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-footer', 'Integration | Component | es footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-footer}}`);

  const footerSocialLinks = document.querySelectorAll('.footer-social a');
  const footerContribtuionsLinks = document.querySelectorAll('.footer-contributions .contributor');
  const footer = document.querySelector('.footer');
  const footerStyle = window.getComputedStyle(footer, null);
  const footerBgColor = footerStyle.getPropertyValue('background-color');

  assert.equal(footerSocialLinks.length, 3, 'social links are loading');
  assert.equal(footerContribtuionsLinks.length, 2, 'contributors links are loading');
  assert.equal(footerBgColor, 'rgb(242, 236, 233)', 'background color is rendering');

});
