import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'button',
  classNames: ['es-button'],

  classNameBindings: [
    'buttonIcon',
    'isDark:button-dark:button-light',
    'isBlock:button-block',
    'isDense:button-dense',
    'isTiny:button-tiny',
    'isLink:button-link',
    'icon:button-icon',
    'isDisabled:disabled'
  ],

  attributeBindings: [
    'ariaDisabled:aria-disabled',
    'ariaLabel:aria-label',
    'ariaPressed:aria-pressed',
    'dataRole:data-role',
    'isDisabled:disabled',
    'title',
    'type'
  ],

  //attributes
  dataRole: null,

  //require this
  label: null,

  type: null,

  //sizes
  isBlock: false,

  isDense: false,
  isLink: false,
  isTiny: false,

  //style
  isDark: true,

  isDisabled: false,

  //accessibility support
  ariaDisabled: false,

  ariaLabel: null,
  ariaPressed: null,
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
  }
});
