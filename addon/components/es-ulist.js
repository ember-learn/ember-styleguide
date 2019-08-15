import Component from '@ember/component';
import layout from '../templates/components/es-ulist';
import { computed } from '@ember/object';

import { deprecate } from '@ember/application/deprecations';

export default Component.extend({
  init() {
    this._super(...arguments);

    deprecate('es-ulist is deprecated and will be removed in the next version of ember-styleguide. If you think this has been done in error please contact the Learning Team in #dev-ember-learning in the Ember Community Discord.', null, {
      id: 'styleguide-es-ulist',
      until: '4.0.0'
    });
  },
  layout,
  classNames: ['es-ulist'],
  classNameBindings: ['hasBorder:bordered'],

  
  listId: computed(function() {
    return ('list-' + this.get('elementId'));
  }),

  //accessibility support
  ariaLabelledby: null, //for the ul element
  ariaLabel: null,
  listItems: null,
  listTitle: null,
  
  hasImage: false,
  hasLink: false,
  hasBorder: false,

  isUnorderedList: true, //add flexibility to use ordered or unordered list.
  isTitleVisible: true, //add the flexibility to visually hide the title for the list. It should still be there for ADA.


});
