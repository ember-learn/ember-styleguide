import Component from '@ember/component';
import layout from '../../templates/components/es-accordion/es-item';
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
  accordionItemIndex: null,
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
    'accordionState.activeItem',
    'accordionItemIndex',
    'expanded',
    function()
    {
      const accordionItemIndex = get(this, 'accordionItemIndex');
      const activeItem = get(this, 'accordionState.activeItem');

      if (activeItem === accordionItemIndex) {
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
      accordionItemIndex,
      status,
      statuses,
    } = getProperties(this, [
      'accordionState.registerIndex',
      'accordionItemIndex',
      'status',
      'statuses',
    ]);
    const statusObject = A(statuses).findBy('status', status);

    setProperties(this, {
      statusLabel: statusObject.label,
      statusIcon: statusObject.icon,
      statusTextColor: statusObject.color,
    });

    registerIndex(accordionItemIndex);
  },

  focusIn() {
    const {
      accordionItemIndex,
      'accordionState.setFocusIndex': setFocusIndex,
    } = getProperties(this, [
      'accordionItemIndex',
      'accordionState.setFocusIndex',
    ]);

    setFocusIndex(accordionItemIndex);
  },

  focusOut() {
    const {
      'accordionState.focusIndex': focusIndex,
      'accordionState.setFocusIndex': setFocusIndex,
      accordionItemIndex,
    } = getProperties(this, [
      'accordionState.focusIndex',
      'accordionState.setFocusIndex',
      'accordionItemIndex',
    ]);

    if (focusIndex === accordionItemIndex) {
      setFocusIndex(null);
    }
  },

  mouseDown() {
    const {
      isExpanded,
      accordionItemIndex,
      'accordionState.setActiveItem': setActiveItem,
    } = getProperties(this, [
      'isExpanded',
      'accordionItemIndex',
      'accordionState.setActiveItem',
    ]);
    let index;

    if (isExpanded) {
      index = null;
    } else {
      index = accordionItemIndex;
    }

    setActiveItem(index);
  },
});
