import Component from '@ember/component';
import layout from '../../templates/components/es-ulist/link';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',

  isBlocked: computed('isNonBlock', function() {
    return this.get('isNonBlock') || false;
  })
});
