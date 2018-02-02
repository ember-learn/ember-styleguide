import Component from '@ember/component';
import layout from '../templates/components/es-button';
import { computed } from '@ember/object';

export default Component.extend({
    layout,
    tagName: 'button',

    classNames: ['es-button'],
    classNameBindings: [
      'buttonIcon',
      'isDark:button-dark',
      'isLight:button-light',
      'isBlock:button-block',
      'isDense:button-dense',
      'isTiny:button-tiny',
      'isLink:button-link',
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
    isBlock: false,
    isDense: false,
    isLink: false,
    isTiny: false,

    //style
    isDark: false,
    isLight: false,
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
