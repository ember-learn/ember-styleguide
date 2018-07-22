import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

function isPrintableCharacter (str) {
  return str.length === 1 && str.match(/\S/);
}

export default Component.extend({
  layout,
  tagName: 'li',
  tabIndex: 0,

  classNameBindings: ['isDropdown:dropdown'],
  isDropdown: equal('link.type', 'dropdown'),

  keyCode: Object.freeze({
    'TAB': 9,
    'RETURN': 13,
    'ESC': 27,
    'SPACE': 32,
    'PAGEUP': 33,
    'PAGEDOWN': 34,
    'END': 35,
    'HOME': 36,
    'LEFT': 37,
    'UP': 38,
    'RIGHT': 39,
    'DOWN': 40
  }),

  navbar: service(),

  init() {
    this._super(...arguments);

    this.$.tabIndex = -1;
  },

  didInsertElement() {
    this.get('navbar').register(this);
    this.domNode = this.element.querySelector('ul[role="menu"]');

    if(this.domNode) {
      this.element.querySelector('a').onmousedown = () => this.expand();
      let links = Array.from(this.domNode.querySelectorAll('a'))

      links.forEach((ancor) => {
        ancor.addEventListener('blur', () => this.handleBlur());
      });

      // set this.Chars to the first letter of each link content for text search in setFocusByFirstCharacter
      this.firstChars = links.map(link => link.text.trim()[0].toLowerCase());
    }
  },

  handleBlur() {
    next(this, function() {
      let subItems = Array.from(this.element.querySelectorAll('ul[role="menu"] li'));
      let focused = subItems.find(item => document.activeElement === item.querySelector('a'));

      // debugger
      if(!focused) {
        this.closePopupMenu();
      }
    })
  },

  openPopupMenu() {
    // Get position and bounding rectangle of controller object's DOM node
    var rect = this.element.getBoundingClientRect();

    // Set CSS properties
    if(this.domNode) {
      this.domNode.style.display = 'block';
      this.domNode.style.position = 'absolute';
      this.domNode.style.top = (rect.height - 1) + 'px';
      this.domNode.style.zIndex = 100;
    }

    this.set('expanded', true);
  },

  closePopupMenu(force) {
    var controllerHasHover = this.hasHover;

    var hasFocus = this.hasFocus;

    if (!this.isMenubarItem) {
      controllerHasHover = false;
    }

    if (force || (!hasFocus && !this.hasHover && !controllerHasHover)) {
      if(this.domNode) {
        this.domNode.style.display = 'none';
        this.domNode.style.zIndex = 0;
      }
      this.set('expanded', false);
    }
  },

  expanded: computed({
    get() {
      return this.element.getAttribute('aria-expanded') === 'true';
    },
    set(key, value) {
      this.element.setAttribute('aria-expanded', value);
    }
  }).volatile(),

  setFocusToFirstItem() {
    this.element.querySelector('ul[role="menu"] li a').focus();
  },

  setFocusToLastItem() {
    this.element.querySelector('ul[role="menu"] li a:last-of-type').focus();
  },

  setFocusToNextItem() {
    let subItems = Array.from(this.element.querySelectorAll('ul[role="menu"] li'));

    let focused = subItems.find(item => document.activeElement === item.querySelector('a'));
    let focusedIndex = subItems.indexOf(focused);


    let nextItem = subItems[(focusedIndex + 1) % subItems.length];

    nextItem.querySelector('a').focus();
  },

  setFocusToPreviousItem() {
    let subItems = Array.from(this.element.querySelectorAll('ul[role="menu"] li'));

    let focused = subItems.find(item => document.activeElement === item.querySelector('a'));
    let focusedIndex = subItems.indexOf(focused);

    let nextIndex = focusedIndex - 1;

    if (nextIndex < 0) {
      nextIndex = subItems.length - 1;
    }

    let nextItem = subItems[nextIndex];

    nextItem.querySelector('a').focus();
  },

  setFocusByFirstCharacter (inputCharacter) {
    let character = inputCharacter.toLowerCase();

    let subItems = Array.from(this.element.querySelectorAll('ul[role="menu"] li'));
    let focused = subItems.find(item => document.activeElement === item.querySelector('a'));
    let start = subItems.indexOf(focused) + 1;

    if (start === subItems.length) {
      start = 0;
    }

    // Check remaining slots in the menu
    let index = this.getIndexFirstChars(start, character);

    // If not found in remaining slots, check from beginning
    if (index === -1) {
      index = this.getIndexFirstChars(0, character);
    }

    // If match was found...
    if (index > -1) {
      subItems[ index ].querySelector('a').focus();
    }
  },

  getIndexFirstChars (startIndex, char) {
    for (var i = startIndex; i < this.firstChars.length; i++) {
      if (char === this.firstChars[ i ]) {
        return i;
      }
    }
    return -1;
  },


  keyDown(event) {
    const char = event.key;
    let flag = false;
    let clickEvent;
    let mousedownEvent;

    switch (event.keyCode) {
      case this.keyCode.RETURN:
      case this.keyCode.SPACE:
        // Create simulated mouse event to mimic the behavior of ATs
        // and let the event handler handleClick do the housekeeping.
        mousedownEvent = new MouseEvent('mousedown', {
          'view': window,
          'bubbles': true,
          'cancelable': true
        });
        clickEvent = new MouseEvent('click', {
          'view': window,
          'bubbles': true,
          'cancelable': true
        });

        document.activeElement.dispatchEvent(mousedownEvent);
        document.activeElement.dispatchEvent(clickEvent);

        flag = true;
        break;
      case this.keyCode.DOWN:
        if(this.get('expanded')) {
          this.setFocusToNextItem();
        } else {
          this.openPopupMenu();
          this.setFocusToFirstItem();
        }
        flag = true;
        break;

      case this.keyCode.LEFT:
        this.get('navbar').setFocusToPreviousItem(this);
        flag = true;
        break;

      case this.keyCode.RIGHT:
        this.get('navbar').setFocusToNextItem(this);
        flag = true;
        break;

      case this.keyCode.UP:
        if(this.get('expanded')) {
          this.setFocusToPreviousItem();
        } else {
          this.openPopupMenu();
          this.setFocusToLastItem();
        }
        break;

      case this.keyCode.HOME:
      case this.keyCode.PAGEUP:
        this.setFocusToFirstItem();
        flag = true;
        break;

      case this.keyCode.END:
      case this.keyCode.PAGEDOWN:
        this.setFocusToLastItem();
        flag = true;
        break;

      case this.keyCode.TAB:
        this.closePopupMenu(true);
        break;

      case this.keyCode.ESC:
        this.closePopupMenu(true);
        break;

      default:
        if (isPrintableCharacter(char)) {
          if(this.get('expanded')) {
            this.setFocusByFirstCharacter(char);
          } else {
            this.get('navbar').setFocusByFirstCharacter(char)
          }
          flag = true;
        }
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  },

  expand() {
    next(this, () => {
      if(this.get('expanded')) {
        this.closePopupMenu();
      } else {
        this.openPopupMenu();
        this.setFocusToFirstItem();
      }
    })
  }
});
