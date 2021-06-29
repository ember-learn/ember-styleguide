import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class EsBannerComponent extends Component {
  @service router;

  get message() {
    return this.args.message ?? 'Important Message';
  }

  get route() {
    return this.args.route ?? '#';
  }

  get show() {
    return this.router.currentRouteName !== this.route;
  }
}
