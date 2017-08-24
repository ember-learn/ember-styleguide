import Ember from 'ember';
import layout from '../templates/components/es-pagewrapper';

export default Ember.Component.extend({
    layout,
    classNameBindings: ['hasAside:pagewrapper-aside:pagewrapper'],
    hasAside: false,
    ariaRole: 'presentation',
    tagName: 'div'
});