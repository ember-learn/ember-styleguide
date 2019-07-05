import Component from 'sparkles-component';

export default class EsButton extends Component {

  constructor({ onClicked }) {
    super(...arguments);

    if(!onClicked) {
      // eslint-disable-next-line no-console
      console.warn(new Error('Button created with no onClicked'));
      this.onClicked = function() {};
    } else {
      this.onClicked = onClicked;
    }
  }

  buttonClicked() {
    this.onClicked();
  }
}
