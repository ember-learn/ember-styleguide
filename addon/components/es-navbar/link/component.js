import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

export default Component.extend({
  layout,
  tagName: "li",
  classNames: ["navbar-list-item"],
  classNameBindings: ["isDropdown:dropdown"],
  isDropdown: equal("link.type", "dropdown"),

  // we need a few keys to respond when we use them
  // the ESC key should close the dropdown menu we are currently on
  // the TAB key should close the dropdown menu we are currently on and move focus to the next item in the top-level of the navbar
  // the ENTER or SPACE key should toggle the dropdown menu. It will already visit whatever link is focused because we used semantic HTML
  // the UP and DOWN key should move us up and down inside of the list we are already in

  keyCode: Object.freeze({
    TAB: 9,
    RETURN: 13,
    ESC: 27,
    SPACE: 32,
    UP: 38,
    DOWN: 40
  }),

  navbar: service(),

  // TODO open dropdown menu
  // - set aria-expanded on the dropdown button to true
  // - show the dropdown-list
  // - remove tabindex=-1 from links in the dropdown-list 

  // TODO close dropdown menu
  // - set aria-expanded on the dropdown button to false
  // - hide the dropdown-list 
  // - add tabindex=-1 to the links in the dropdown-list

  // TODO down arrow key navigation
  // - moves focus to the next link in the list
  // - if it's at the last item, close the dropdown menu (3 steps) then move focus to the next top-level item in the navbar
  
  // TODO up arrow key navigation
  // - moves focus to the previous item in the list. 
  // - if it's at the first item, close the dropdown menu (3 steps) then move focus to the previous top-level item in the navbar
});
