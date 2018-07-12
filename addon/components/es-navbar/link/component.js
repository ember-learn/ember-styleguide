import Component from '@ember/component';
import layout from './template';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';


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
    this.get('navbar.items').push(this);
  },

  keyDown(event) {
    const char = event.key;
    let flag = false;

    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
      case this.keyCode.DOWN:
        if (this.popupMenu) {
          this.popupMenu.open();
          this.popupMenu.setFocusToFirstItem();
          flag = true;
        }
        break;

      case this.keyCode.LEFT:
        this.menu.setFocusToPreviousItem(this);
        flag = true;
        break;

      case this.keyCode.RIGHT:
        this.get('navbar').setFocusToNextItem(this);
        flag = true;
        break;

      case this.keyCode.UP:
        if (this.popupMenu) {
          this.popupMenu.open();
          this.popupMenu.setFocusToLastItem();
          flag = true;
        }
        break;

      case this.keyCode.HOME:
      case this.keyCode.PAGEUP:
        this.menu.setFocusToFirstItem();
        flag = true;
        break;

      case this.keyCode.END:
      case this.keyCode.PAGEDOWN:
        this.menu.setFocusToLastItem();
        flag = true;
        break;

      case this.keyCode.TAB:
        // this.popupMenu.close(true);
        break;

      case this.keyCode.ESC:
        this.popupMenu.close(true);
        break;

      default:
        if (isPrintableCharacter(char)) {
          this.menu.setFocusByFirstCharacter(this, char);
          flag = true;
        }
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
});
