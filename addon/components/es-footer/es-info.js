import Component from '@ember/component';
import layout from '../../templates/components/es-footer/es-info';
import { computed } from '@ember/object';
import { infoLinks } from '../../constants/es-footer';


export default Component.extend({
  classNames: ['footer-info'],
  layout,
  infoLinks,
  infoLinksLastIndex: computed('infoLinks.length', function() {
    return this.infoLinks.length - 1;
  }),

  init() {
    this._super(...arguments);
    this.currentYear = new Date().getUTCFullYear();
  },
});
