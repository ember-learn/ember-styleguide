import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ['hasAside:pagewrapper-aside:pagewrapper'],
  hasAside: false,
  ariaRole: 'presentation',
  tagName: 'div'
});
