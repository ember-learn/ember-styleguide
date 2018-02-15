import Component from '@ember/component';
import layout from '../templates/components/es-accordion';
import {
  get,
  getProperties,
  set,
} from '@ember/object';
import {
  isPresent,
} from '@ember/utils';

export default Component.extend({
  layout,

  classNames: ['accordion-group'],

  activePanel: null,
  focusIndex: null,
  panelIndexes: null,

  init() {
    this._super(...arguments);

    set(this, 'panelIndexes', []);
  },

  keypress(e) {
    const {
      key,
    } = getProperties(e, [
      'key',
    ]);
    const {
      activePanel,
      focusIndex,
    } = getProperties(this, [
      'activePanel',
      'focusIndex',
    ]);

    /* Key press required for standared keys */
    switch (key) {
    case 'Enter':
    case ' ':
      if (activePanel !== focusIndex) {
        set(this, 'activePanel', focusIndex);
      } else {
        set(this, 'activePanel', null);
      }
      break;
    }
  },

  keyDown(e) {
    const {
      key,
    } = getProperties(e, [
      'key',
    ]);

    this._triggerFromKeyboard(key);
  },

  _triggerFromKeyboard(key) {
    const {
      activePanel,
      focusIndex,
      panelIndexes,
    } = getProperties(this, [
      'activePanel',
      'focusIndex',
      'panelIndexes',
    ]);
    const first = Math.min(...panelIndexes);
    const last = Math.max(...panelIndexes);

    if (isPresent(focusIndex)) {
      switch (key) {
      case 'ArrowUp':
        if (activePanel > first) {
          this.decrementProperty('activePanel');
        }
        break;
      case 'ArrowDown':
        if (activePanel < last) {
          this.incrementProperty('activePanel');
        }
        break;
      case 'Home':
        set(this, 'activePanel', 0);
        break;
      case 'End':
        set(this, 'activePanel', last);
        break;
      // case 'PageUp':
      //   if (ctrlKey) {
      //
      //   }
      //   break;
      // case 'PageDown':
      //   if (ctrlKey) {
      //
      //   }
      //   break;
      default:
      }
    }
  },

  actions: {
    setActivePanel(panel) {
      set(this, 'activePanel', parseInt(panel));
    },

    setFocusIndex(panelIndex) {
      set(this, 'focusIndex', panelIndex);
    },

    registerIndex(panel) {
      get(this, 'panelIndexes').push(parseInt(panel));
    },
  },
});
