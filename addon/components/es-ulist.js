import Component from '@ember/component';
import layout from '../templates/components/es-ulist';
import { computed } from '@ember/object';


export default Component.extend({
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
