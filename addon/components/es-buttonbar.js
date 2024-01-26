import Component from '@ember/component';

export default Component.extend({
  classNames: ['es-buttonbar'],

  //accessibility support
  ariaDescribedby: null,

  ariaLabel: null,
  ariaRole: 'group',
  title: null
});
