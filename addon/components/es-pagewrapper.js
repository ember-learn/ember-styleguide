import Component from '@ember/component';
import layout from '../templates/components/es-pagewrapper';

import { deprecate } from '@ember/application/deprecations';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);

    deprecate('es-pagewrapper is deprecated and will be removed in the next version of ember-styleguide. If you think this has been done in error please contact the Learning Team in #dev-ember-learning in the Ember Community Discord.', null, {
      id: 'styleguide-es-ulist',
      until: '4.0.0'
    });
  },

  classNameBindings: ['hasAside:pagewrapper-aside:pagewrapper'],
  hasAside: false,
  ariaRole: 'presentation',
  tagName: 'div'
});
