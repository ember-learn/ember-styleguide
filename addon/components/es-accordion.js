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

export default Component.extend({
  layout,

  classNames: ['accordion-group'],

  activePanel: null,
  focusIndex: null,
  panelIndexes: null,

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

    set(this, 'panelIndexes', []);
  },

  keypress(e) {
    const key = get(e, 'keyCode');
    const {
      activePanel,
      focusIndex,
    } = getProperties(this, [
      'activePanel',
      'focusIndex',
    ]);

    /* Key press required for standared keys */
    switch (key) {
    case 13:
    case 32:
      if (activePanel !== focusIndex) {
        set(this, 'activePanel', focusIndex);
      } else {
        set(this, 'activePanel', null);
      }
      break;
    }
  },

  keyDown(e) {
    const key = get(e, 'keyCode');
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
      case 38:
        if (activePanel > first) {
          this.decrementProperty('activePanel');
        }
        break;
      case 40:
        if (activePanel < last) {
          this.incrementProperty('activePanel');
        }
        break;
      case 36:
        set(this, 'activePanel', first);
        break;
      case 35:
        set(this, 'activePanel', last);
        break;
      }
    }
  },

  actions: {
    setActivePanel(panelIndex) {
      return set(this, 'activePanel', panelIndex);
    },

    setFocusIndex(panelIndex) {
      set(this, 'focusIndex', panelIndex);
    },

    registerIndex(panelIndex) {
      get(this, 'panelIndexes').push(panelIndex);
    },
  },
});
