import Component from '@ember/component';
import layout from '../templates/components/es-footer';
import { socialLinks, infoLinks, contributorLinks, tagline } from '../constants/es-footer';


export default Component.extend({
  layout,
  attributeBindings: ['ariaLabel:aria-label'],
  classNames: ['es-footer'],
  tagName: 'footer',
  currentYear: null,
  init() {
    this._super(...arguments);
    this.currentYear = new Date().getUTCFullYear();
  },

  socialLinks,
  tagline,
  contributorLinks,
  infoLinks,

  //accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: 'contentinfo',
  title: null
});
