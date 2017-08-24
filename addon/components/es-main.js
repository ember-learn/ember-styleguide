import Ember from 'ember';
import layout from '../templates/components/es-main';

export default Ember.Component.extend({
    layout,
    attributeBindings: ['ariaLabel:aria-label'],
    classNames: ['es-main'],
    tagName: 'main',


    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaRole: 'main',
    title: null,
});