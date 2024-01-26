import Component from '@ember/component';
import { tagline, socialLinks } from '../../constants/es-footer';

export default Component.extend({
  classNames: ['footer-statement'],
  tagline,
  socialLinks
});
