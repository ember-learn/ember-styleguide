import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class EsBannerComponent extends Component {
  @service router;

  get message() {
    return this.args.message ?? 'Important Message';
  }

  get url() {
    return this.args.link ?? '#';
  }

  get show() {
    let routeUrl = this.router.currentURL;
    return routeUrl !== this.url;
  }
}
