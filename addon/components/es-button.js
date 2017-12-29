import Component from '@ember/component';
import layout from '../templates/components/es-button';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    tagName: 'button',

    classNames: ['es-button'],
    classNameBindings: [
      'buttonIcon',
      'buttonDark:button-dark',
      'buttonLight:button-light',
      'buttonBlock:button-block',
      'buttonDense:button-dense',
      'buttonTiny:button-tiny',
      'buttonLink:button-link',
      'icon:button-icon',
    ],
    attributeBindings: [
      'ariaDisabled:aria-disabled',
      'ariaDescribedby:aria-describedby',
      'ariaLabel:aria-label',
      'ariaPressed:aria-pressed',
      'dataRole:data-role',
      'disabled',
      'ariaRole:role',
      'title',
      'type'
    ],

    //attributes
    dataRole: null,
    label: null,
    type: null,

    //sizes
    buttonBlock: false,
    buttonDense: false,
    buttonLink: false,
    buttonTiny: false,

    //style
    buttonDark: false,
    buttonLight: false,
    disabled: false,

    //accessibility support
    ariaDescribedby: null,
    ariaDisabled: false,
    ariaLabel: null,
    ariaPressed: null,
    ariaRole: 'button',
    title: null,

    //icon support
    icon: null,

    buttonIcon: computed('icon', function() {
      const icon = this.get('icon');

      if (icon) {
        return `fa ${this.get('icon')}`;
      }

      return null;
    }),

    click() {
      const onClicked = this.get('onClicked');

      if (typeof(onClicked) === 'function') {
        onClicked();
      }
    },
});
