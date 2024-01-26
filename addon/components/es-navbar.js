import Component from '@ember/component';
import { computed } from '@ember/object';

import defaultLinks from '../constants/links';

export default Component.extend({
  tagName: 'nav',
  classNames: ['es-navbar'],
  ariaLabel: 'Ember',
  navHome: computed('home', function() {
    if (this.home) {
      return this.home;
    }

    return 'https://www.emberjs.com';
  }),
  navLinks: computed('links.[]', function() {
    if(this.links) {
      return this.links;
    }

    return defaultLinks;
  }),
  actions: {
    toggleMenu() {
      let menu = this.element.querySelector('ul[role="menubar"]');

      menu.setAttribute('aria-expanded', menu.getAttribute('aria-expanded') !== 'true');
    }
  }
});
