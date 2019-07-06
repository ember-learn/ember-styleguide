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

  navbar: service(),

  actions: {
    toggleDropdown() {
      this.toggleProperty('isDropdownOpen');
        
      if (this.isDropdownOpen) {
        // if it's open, let's make sure it can do some things
        schedule('afterRender', this, function() {

          // move focus to the first item in the dropdown
          this.handleFirstElementFocus();

          // add event listeners
          let dropdownList = this.element.querySelector('.navbar-dropdown-list');

          //TODO ...for click events outside this dropdown

          //...for certain keypress events
          dropdownList.addEventListener('keydown', event => {

            // ESC key should close the dropdown and return focus to the toggle
            if (event.keyCode === 27 && this.isDropdownOpen) {
              this.closeDropdown();
              this.returnFocus();

            // if focus leaves the open dropdown via keypress, close it (without trying to otherwise control focus)  
            } else if (this.isDropdownOpen) {
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
  },

  openDropdown() { //might not need this
    // open the dropdown and set the focus to the first item inside
    this.set('isDropdownOpen', true);
    this.handleFirstElementFocus();
  },

  handleBlur() { //TODO is this working?
    next(this, function() {
      let subItems = Array.from(this.element.querySelectorAll('.navbar-dropdown-list li'));
      let focused = subItems.find(item => document.activeElement === item.querySelector('a'));

      //if the dropdown isn't focused, close it
      if (!focused) {
        this.closeDropdown();
      }
    });
  }, 

  handleFirstElementFocus() {
    // Identify the first item in the dropdown list & set focus on it
    let firstFocusable = this.element.querySelector('.navbar-dropdown-list li:first-of-type a');
    firstFocusable.focus();
  },

  returnFocus() {
    // after that rendering bit happens, we need to return the focus to the trigger
    schedule('afterRender', this, function() {
      let dropdownTrigger = this.element.querySelector('.navbar-list-item-dropdown-toggle');
      dropdownTrigger.focus();
    });  
  },

  willDestroyElement() {
    document.removeEventListener('keydown', this.triggerDropdown);
    document.removeEventListener('click', this.triggerDropdown);
  }
});
