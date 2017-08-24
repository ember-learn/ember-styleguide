import Ember from 'ember';
import layout from '../templates/components/es-ulist';

export default Ember.Component.extend({
    layout,
    classNames: ['es-ulist'],

    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaRole: 'group',
    title: null,
});