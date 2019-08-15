import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { schedule, next } from '@ember/runloop';

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['navbar-list-item'],
  classNameBindings: ['isDropdown:dropdown'],
  isDropdown: equal('link.type', 'dropdown'),

  isDropdownOpen: false,

  // because aria-expanded requires a string value instead of a boolean
  isExpanded: computed('isDropdownOpen', function() {
    return this.isDropdownOpen ? 'true' : 'false';
  }),

  navbar: service(), //TODO  also do we need this too?

  actions: {
    triggerDropdown() {
      this.toggleProperty('isDropdownOpen');

      if (this.isDropdownOpen) {
        // once it's open, let's make sure it can do some things
        schedule('afterRender', this, function() {
          // Define startup states
          // Dropdown list
          let dropdownList = this.element.querySelector('.navbar-dropdown-list');

          // Identify / set focus on the first item in the dropdown list automatically
          let firstFocusable = this.element.querySelector('.navbar-dropdown-list li:first-of-type a');
          firstFocusable.focus();

          // Need some event listeners for keyboard events
          dropdownList.addEventListener('keydown', event => {

            // Listen for ESC key to exit
            if (event.keyCode === 27 && this.isDropdownOpen) {
              this.closeDropdown();
            } else if (this.isDropdownOpen) {
              // if focus leaves the open dropdown, close it (without trying to otherwise control focus)
              this.handleBlur();
            } else {
              return;
            }
          });
        });
      }
    }
  },
  closeDropdown() {
    // set the isDropdownOpen to false, which will make the dropdown go away
    this.set('isDropdownOpen', false);
    // after that rendering bit happens, we need to return the focus to the trigger
    schedule('afterRender', this, function() {
      let dropdownTrigger = this.element.querySelector('.navbar-list-item-dropdown-toggle');
      dropdownTrigger.focus();
    });
  },

  handleBlur() {
    next(this, function() {
      let subItems = Array.from(this.element.querySelectorAll('.navbar-dropdown-list li'));
      let focused = subItems.find(item => document.activeElement === item.querySelector('a'));

      if (!focused) {
        this.set('isDropdownOpen', false);
      }
    });
  }

});
