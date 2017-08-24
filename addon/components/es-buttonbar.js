import Ember from 'ember';
import layout from '../templates/components/es-buttonbar';

export default Ember.Component.extend({
    layout,
    classNames: ['es-buttonbar'],


    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaRole: 'group',
    title: null,

});