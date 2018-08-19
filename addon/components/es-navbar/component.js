import Component from '@ember/component';
import { computed } from '@ember/object';

import layout from './template';
import defaultLinks from '../../constants/links';

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['es-navbar'],
  ariaLabel: 'Ember',
  navLinks: computed('links.[]', function() {
    if(this.links) {
      return this.links;
    }

    return defaultLinks;
  })
});
