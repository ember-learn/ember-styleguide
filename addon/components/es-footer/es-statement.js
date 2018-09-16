import Component from '@ember/component';
import layout from '../../templates/components/es-footer/es-statement';
import { tagline, socialLinks } from '../../constants/es-footer';

export default Component.extend({
  classNames: ['footer-statement'],
  layout,
  tagline,
  socialLinks
});
