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
import { computed } from '@ember/object';
import {
  A,
} from '@ember/array';

export default Component.extend({
  layout,

  classNames: ['accordion-group'],

  activePanel: null,
  focusIndex: null,
  accordionItemIndexes: null,

  accordionState: computed('activePanel', 'focusIndex', function() {
    const {
      activePanel,
      focusIndex,
      actions,
    } = getProperties(this, [
      'activePanel',
      'focusIndex',
      'actions',
    ]);

    return {
      activePanel,
      focusIndex,
      setActivePanel: actions.setActivePanel.bind(this),
      setFocusIndex: actions.setFocusIndex.bind(this),
      registerIndex: actions.registerIndex.bind(this),
    };
  }),

  init() {
    this._super(...arguments);

    set(this, 'accordionItemIndexes', []);
  },

  keyDown(e) {
    const key = get(e, 'keyCode');
    const {
      activePanel,
      focusIndex,
      accordionItemIndexes,
    } = getProperties(this, [
      'activePanel',
      'focusIndex',
      'accordionItemIndexes',
    ]);
    const first = Math.min(...accordionItemIndexes);
    const last = Math.max(...accordionItemIndexes);
    let activeaccordionItemIndex = A(accordionItemIndexes).indexOf(activePanel);

    if (isPresent(focusIndex)) {
      switch (key) {
      case 38:
        if (activePanel > first) {
          activeaccordionItemIndex--
          set(this, 'activePanel', accordionItemIndexes[activeaccordionItemIndex]);
        }
        break;
      case 40:
        if (activePanel < last) {
          activeaccordionItemIndex++
          set(this, 'activePanel', accordionItemIndexes[activeaccordionItemIndex]);
        }
        break;
      case 36:
        set(this, 'activePanel', first);
        break;
      case 35:
        set(this, 'activePanel', last);
        break;
      case 13:
      case 32:
        if (activePanel !== focusIndex) {
          set(this, 'activePanel', focusIndex);
        } else {
          set(this, 'activePanel', null);
        }
        break;
      }
    }
  },

  actions: {
    setActivePanel(accordionItemIndex) {
      return set(this, 'activePanel', accordionItemIndex);
    },

    setFocusIndex(accordionItemIndex) {
      set(this, 'focusIndex', accordionItemIndex);
    },

    registerIndex(accordionItemIndex) {
      get(this, 'accordionItemIndexes').push(accordionItemIndex);
    },
  },
});
