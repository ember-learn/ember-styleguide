import Ember from 'ember';
import layout from '../templates/components/es-main';

export default Ember.Component.extend({
    layout,
    className: 'es-main',
    tagName: 'main',
    ariaRole: 'main',
    hasAside: false,
});