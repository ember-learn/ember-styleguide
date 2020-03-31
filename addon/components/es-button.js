import Component from '@glimmer/component';

export default class EsButtonComponent extends Component {
  // default value
  _onClicked = () => {};

  constructor() {
    super(...arguments);


    if(!this.args.onClicked) {
      // eslint-disable-next-line no-console
      console.warn(new Error('Button created with no onClicked'));
    } else {
      this._onClicked = this.args.onClicked;
    }
  }

  buttonClicked() {
    this._onClicked();
  }
}
