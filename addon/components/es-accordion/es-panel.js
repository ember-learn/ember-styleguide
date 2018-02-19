import Component from '@ember/component';
import layout from '../../templates/components/es-accordion/es-panel';
import {
  get,
  getProperties,
  setProperties,
} from '@ember/object';
import {
  computed,
} from '@ember/object';
import {
  Statuses as statuses,
} from '../../constants/es-accordion';
import {
  A,
} from '@ember/array';
import {
  isPresent,
} from '@ember/utils';

export default Component.extend({
  layout,

  classNames: ['accordion'],

  accordionState: null,
  availability: null,
  panelIndex: null,
  status: null,
  statuses,
  statusIcon: null,
  statusTextColor: null,
  title: null,

  availabilityMessage: computed('availability', function() {
    const availability = get(this, 'availability');

    return isPresent(availability) ? availability : 'Not yet available';
  }),

  isExpanded: computed(
    'accordionState.activePanel',
    'panelIndex',
    'expanded',
    function()
    {
      const panelIndex = get(this, 'panelIndex');
      const activePanel = get(this, 'accordionState.activePanel');

      if (activePanel === panelIndex) {
        return true;
      } else {
        return false;
      }
    }
  ),

  init() {
    this._super(...arguments);

    const {
      'accordionState.registerIndex': registerIndex,
      panelIndex,
      status,
      statuses,
    } = getProperties(this, [
      'accordionState.registerIndex',
      'panelIndex',
      'status',
      'statuses',
    ]);
    const statusObject = A(statuses).findBy('status', status);

    setProperties(this, {
      statusLabel: statusObject.label,
      statusIcon: statusObject.icon,
      statusTextColor: statusObject.color,
    });

    registerIndex(panelIndex);
  },

  focusIn() {
    const {
      panelIndex,
      'accordionState.setFocusIndex': setFocusIndex,
    } = getProperties(this, [
      'panelIndex',
      'accordionState.setFocusIndex',
    ]);

    setFocusIndex(panelIndex);
  },

  focusOut() {
    const {
      'accordionState.focusIndex': focusIndex,
      panelIndex,
    } = getProperties(this, [
      'accordionState.focusIndex',
      'panelIndex',
    ]);

    if (focusIndex === panelIndex) {
      get(this, 'accordionState.setFocusIndex')(null);
    }
  },

  actions: {
    toggleOpen() {
      const {
        isExpanded,
        panelIndex,
        'accordionState.setActivePanel': setActivePanel,
      } = getProperties(this, [
        'isExpanded',
        'panelIndex',
        'accordionState.setActivePanel',
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
