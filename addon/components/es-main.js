import Ember from 'ember';
import layout from '../templates/components/es-main';

export default Ember.Component.extend({
    layout,
    attributeBindings: ['ariaLabel:aria-label'],
    className: 'es-main',
    tagName: 'main',
    ariaRole: 'main',
    hasAside: false,
    ariaLabel: null,
});