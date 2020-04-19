import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class EsButtonComponent extends Component {
  // default value
  _onClicked = () => {};
  _type = "button";

  constructor() {
    super(...arguments);


    if(!this.args.onClicked) {
      // eslint-disable-next-line no-console
      console.warn(new Error('Button created with no onClicked'));
    } else {
      this._onClicked = this.args.onClicked;
    }

    if(!this.args.type) {
      // eslint-disable-next-line no-console
      console.warn(new Error('Button created with no @type defined - defaulting to `type="button"`'));
    } else {
      this._type = this.args.type;
    }
  }

  @action
  buttonClicked() {
    this._onClicked();
  }
}
