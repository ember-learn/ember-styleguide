import Component from '@ember/component';
import layout from '../templates/components/es-search';

export default Component.extend({
  layout,
  classNames: ['es-search'],
  ariaRole: 'search'
});
