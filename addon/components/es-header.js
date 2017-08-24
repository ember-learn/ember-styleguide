import Ember from 'ember';
import layout from '../templates/components/es-header';

export default Ember.Component.extend({
    layout,
    attributeBindings: ['ariaLabel:aria-label'],
    classNames: ['es-header'],
    tagName: 'header',

    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaRole: 'banner',
    title: null,



});