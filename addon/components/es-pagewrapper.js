import Component from '@ember/component';
import layout from '../templates/components/es-pagewrapper';

export default Component.extend({
  layout,
  classNameBindings: ['hasAside:pagewrapper-aside:pagewrapper'],
  hasAside: false,
  ariaRole: 'presentation',
  tagName: 'div'
});
