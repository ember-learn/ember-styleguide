/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';

const Mascots = {
  tomster: { image: '/images/mascots/tomster.png', name: 'Tomster' },
  zoey: { image: '/images/mascots/zoey.png', name: 'Zoey' },
}

function randomMascot() {
  let mascotKeys = Object.keys(Mascots);

  let randomIndex = Math.floor(Math.random() * Math.floor(mascotKeys.length));

  return Mascots[mascotKeys[randomIndex]];
}

export default class EsNoteComponent extends Component {
  constructor() {
    super(...arguments);

    if (this.args.mascot) {
      this.mascot = Mascots[this.args.mascot];
    } else {
      this.mascot = randomMascot();
    }
  }
}
