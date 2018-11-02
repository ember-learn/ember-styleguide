import Component from '@ember/component';
import layout from '../../templates/components/es-aside/es-category';

import { set, get } from "@ember/object";

export default Component.extend({
  classNames: ['es-category'],
  isOpen: false,
  disabled: false,
  layout,
  didReceiveAttrs() {
    this._super(...arguments);

    // If caller passes in open=, use it
    const open = get(this, 'open');
    if (open !== undefined) {
      set(this, 'isOpen', open);
    }
  },

  actions: {
    toggleIsOpen() {
      if (this.get("disabled")) {
        return;
      }
      set(this, 'isOpen', !get(this, 'isOpen'));
    }
  }
});
