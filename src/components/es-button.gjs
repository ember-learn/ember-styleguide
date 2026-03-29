import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { action } from '@ember/object';

export default class EsButtonComponent extends Component {
  // default value
  _onClicked = () => {};
  _type = 'button';

  constructor() {
    super(...arguments);

    if (!this.args.onClicked) {
      if (this.args.type !== 'submit') {
        console.warn(new Error('Button created with no onClicked'));
      }
    } else {
      this._onClicked = this.args.onClicked;
    }

    if (!this.args.type) {
      console.warn(
        new Error(
          'Button created with no @type defined - defaulting to `type="button"`',
        ),
      );
    } else {
      this._type = this.args.type;
    }
  }

  @action
  buttonClicked() {
    this._onClicked();
  }

  <template>
    <button
      class={{if @secondary "es-button-secondary" "es-button"}}
      aria-label={{@label}}
      type={{this._type}}
      ...attributes
      {{on "click" this.buttonClicked}}
    >
      {{#if (has-block)}}
        {{yield}}
      {{else}}
        {{@label}}
      {{/if}}
    </button>
  </template>
}
