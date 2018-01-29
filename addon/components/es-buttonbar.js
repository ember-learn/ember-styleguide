import Component from '@ember/component';
import layout from '../templates/components/es-buttonbar';

export default Component.extend({
  layout,
  classNames: ['es-buttonbar'],


  //accessibility support
  ariaDescribedby: null,
  ariaLabel: null,
  ariaRole: 'group',
  title: null
});
