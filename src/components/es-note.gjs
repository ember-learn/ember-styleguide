import Component from '@glimmer/component';
const tomsterImage = new URL(
  '../assets/images/mascots/tomster.png',
  import.meta.url,
).href;
const zoeyImage = new URL('../assets/images/mascots/zoey.png', import.meta.url)
  .href;

const Mascots = {
  tomster: { image: tomsterImage, name: 'Tomster' },
  zoey: { image: zoeyImage, name: 'Zoey' },
};

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

  <template>
    {{! template-lint-disable no-redundant-role }}
    <div class="cta" ...attributes>
      <div class="cta-note">
        <div class="cta-note-body">
          <div
            class="cta-note-heading"
            data-test-es-note-heading
          >{{this.mascot.name}} says...</div>
          <div class="cta-note-message">{{yield}}</div>
        </div>
        <img src={{this.mascot.image}} role="presentation" alt="" />
      </div>
    </div>
  </template>
}
