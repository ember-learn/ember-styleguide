/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import icons from '../constants/icons';

export default class EsIconComponent extends Component {
  get icon() {
    if (!(this.args.icon in icons)) {
      assert(
        `${
          this.args.icon
        } isn't a supported icon. We no longer support dynamid svg lookup and can only support the following icons: ${Object.keys(
          icons
        ).join(', ')}`
      );
    }

    return icons[this.args.icon].replace(
      '<svg ',
      `<svg class="${this.args.class}"`
    );
  }
}
