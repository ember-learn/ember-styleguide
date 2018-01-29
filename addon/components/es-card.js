import Component from '@ember/component';
import layout from '../templates/components/es-card';

export default Component.extend({
  layout,
  classNames: ['es-card'],
  classNameBindings: ['hasBorder:border'],

  //accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: null,
  title: null,

  hasBorder: false
});
