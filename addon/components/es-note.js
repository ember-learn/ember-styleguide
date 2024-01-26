import Component from '@ember/component';
import { get } from '@ember/object';
import {
  DefaultMessage as defaultMessage,
  Mascots as mascots,
 } from '../constants/mascots';

export default Component.extend({
  classNames: ['cta'],
  imageUrl: null,
  mascots,
  nameTitle: null,
  defaultMessage,

  init() {
    this._super(...arguments);

    this._randomMascot();
  },

  _randomMascot() {
    const random = Math.random();
    const mascots = get(this, 'mascots');
    let randomIndex, mascot = mascots[0];

    if (mascots.length > 1) {
      randomIndex = Math.floor(random * Math.floor(2));
      mascot = mascots[randomIndex];
    }

    this.setProperties({
      imageUrl: get(mascot, 'image'),
      nameTitle: `${get(mascot, 'name')} says...`,
    });
  }
});
