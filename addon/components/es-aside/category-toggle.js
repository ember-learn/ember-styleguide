
import Component from '@ember/component';
import layout from '../../templates/components/es-aside/category-toggle';
import { computed, get } from "@ember/object";

export default Component.extend({
  tagName: 'a',
  classNames: ['category-toggle'],
  classNameBindings: ['isOpen'],
  layout,

  keyUp(e) {
    if (e.keyCode === 32) {
      e.preventDefault();
      this.get('on-click')();
    }
  },

  attributeBindings: ['href', 'ariaExpanded:aria-expanded'],
  href: '#',

  ariaExpanded: computed('isOpen', function() {
    return get(this, 'isOpen') ? 'true' : 'false';
  }),

  click(e) {
    e.preventDefault();
    this.get('on-click')();
  }
});
