import Component from '@ember/component';
import layout from '../templates/components/es-text';

export default Component.extend({
  layout,

  tagName: 'p',
  classNames: ['es-text'],

  text: null
});
