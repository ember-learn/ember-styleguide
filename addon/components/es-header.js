import Ember from 'ember';
import layout from '../templates/components/es-header';

export default Ember.Component.extend({
    layout,
    attributeBindings: ['ariaLabel:aria-label'],
    classNames: ['es-header'],
    tagName: 'header',
    ariaRole: 'banner',
    ariaLabel: null,

});