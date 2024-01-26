import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
  classNames: ['es-ulist'],
  classNameBindings: ['hasBorder:bordered'],

  listId: computed(function() {
    return ('list-' + this.get('elementId'));
  }),

  //accessibility support
  //for the ul element
  ariaLabelledby: null,

  ariaLabel: null,
  listItems: null,
  listTitle: null,
  hasImage: false,
  hasLink: false,
  hasBorder: false,

  //add flexibility to use ordered or unordered list.
  isUnorderedList: true,

  //add the flexibility to visually hide the title for the list. It should still be there for ADA.
  isTitleVisible: true
});
