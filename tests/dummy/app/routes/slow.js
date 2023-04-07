import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { timeout } from 'ember-concurrency';

export default class BasicRoute extends Route {
  @service router;
  async model() {
    await timeout(2000);
    return this.router.transitionTo('fancy');
  }
}
