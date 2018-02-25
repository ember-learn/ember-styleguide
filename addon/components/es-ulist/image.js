import Component from '@ember/component';
import layout from '../../templates/components/es-ulist/image';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  classNames: ['es-ulist-image'],

  isIconLeft: computed('placement', function() {
    return (this.get('placement') !== 'right');
  }),

  height: computed('imgHeight', function() {
    return this.get('imgHeight') || 50;
  }),

  width: computed('imgWidth', function() {
    return this.get('imgWidth') || 50;
  })
});
