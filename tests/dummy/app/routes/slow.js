import Route from '@ember/routing/route';
import * as serviceModule from '@ember/service';
import { timeout } from 'ember-concurrency';

// `service` was added in Ember 4.1; fall back to `inject` on older versions
const service = serviceModule.service ?? serviceModule.inject;

export default class BasicRoute extends Route {
  @service router;
  async model() {
    await timeout(2000);
    return this.router.transitionTo('fancy');
  }
}
