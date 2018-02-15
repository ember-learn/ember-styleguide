import Component from '@ember/component';
import layout from '../../templates/components/es-accordion/es-panel';
import {
  get,
  getProperties,
  setProperties,
} from '@ember/object';
import { computed } from '@ember/object';
import {
  Statuses as statuses,
} from '../../constants/es-accordion';
import { A } from '@ember/array';

export default Component.extend({
  layout,

  classNames: ['accordion'],

  activePanel: null,
  availability: 'Not yet available',
  focusIndex: null,
  panelIndex: null,
  status: null,
  statuses,
  statusIcon: null,
  statusTextColor: null,
  title: null,

  isExpanded: computed('activePanel', 'panelIndex', 'expanded', function() {
    const {
      activePanel,
      panelIndex,
    } = getProperties(this, [
      'activePanel',
      'panelIndex',
    ]);

    if (activePanel === panelIndex) {
      return true;
    } else {
      return false;
    }
  }),

  focusIn() {
    const {
      panelIndex,
      setFocusIndex,
    } = getProperties(this, [
      'panelIndex',
      'setFocusIndex',
    ]);

    setFocusIndex(panelIndex);
  },

  focusOut() {
    const {
      focusIndex,
      panelIndex,
    } = getProperties(this, [
      'focusIndex',
      'panelIndex',
    ]);

    if (focusIndex === panelIndex) {
      get(this, 'setFocusIndex')(null);
    }
  },

  init() {
    this._super(...arguments);

    const {
      panelIndex,
      registerIndex,
    } = getProperties(this, [
      'panelIndex',
      'registerIndex'
    ]);

    registerIndex(panelIndex);
  },

  didInsertElement() {
    this._super(...arguments);

    const {
      status,
      statuses,
    } = getProperties(this, [
      'status',
      'statuses',
    ]);
    const statusObject = A(statuses).findBy('status', status);

    setProperties(this, {
      statusLabel: statusObject.label,
      statusIcon: statusObject.icon,
      statusTextColor: statusObject.color,
    });
  },

  actions: {
    toggleOpen() {
      const {
        isExpanded,
        panelIndex,
        setActivePanel,
      } = getProperties(this, [
        'isExpanded',
        'panelIndex',
        'setActivePanel'
      ]);
      let index;

      if (isExpanded) {
        index = null;
      } else {
        index = panelIndex;
      }

      setActivePanel(index);
    }
  },
});
