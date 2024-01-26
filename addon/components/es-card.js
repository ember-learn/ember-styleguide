import Component from '@ember/component';

export default Component.extend({
  classNames: ['es-card'],
  classNameBindings: ['hasBorder:border'],

  //accessibility support
  ariaDescribedby: null,

  ariaLabel: null,
  ariaRole: null,
  title: null,
  hasBorder: false
});
