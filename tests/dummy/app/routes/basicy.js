import Route from '@ember/routing/route';
import * as serviceModule from '@ember/service';

// `service` was added in Ember 4.1; fall back to `inject` on older versions
const service = serviceModule.service ?? serviceModule.inject;

export default class BasicRoute extends Route {
  @service router;
  model() {
    return this.router.transitionTo('fancy');
  }
}
