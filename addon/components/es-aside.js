import Ember from 'ember';
import layout from '../templates/components/es-aside';

export default Ember.Component.extend({
    layout,
    attributeBindings: ['ariaLabel:aria-label'],
    classNames: ['es-aside'],
    tagName: 'aside',

    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaRole: 'complementary',
    title: null,



});