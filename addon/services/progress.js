import Service, { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { rawTimeout, task, timeout } from 'ember-concurrency';
import { buildWaiter } from '@ember/test-waiters';

const SPEED = 200;

let waiter = buildWaiter('progress-bar');

export default class ProgressService extends Service {
  @service router;

  count = 0;
  progress = 0;

  @tracked _style = '';

  constructor() {
    super(...arguments);

    this.router.on('routeWillChange', this.onRouteWillChange);
  }

  willDestroy() {
    this.router.off('routeWillChange', this.onRouteWillChange);

    super.willDestroy(...arguments);
  }

  get style() {
    return htmlSafe(this._style);
  }

  @action
  async onRouteWillChange(transition) {
    this.counterTask.perform(transition.promise);
  }

  increaseCounter() {
    this.count += 1;
    this.updateTask.perform();
  }

  decreaseCounter() {
    this.count -= 1;
  }

  @task(function* (promise) {
    // if the promise resolves on the next tick, we don't show the loading bar
    let resolved = false;
    promise.then(() => {
      resolved = true;
    });
    yield timeout(0);

    if (!resolved) {
      try {
        this.increaseCounter();
        yield promise;
      } finally {
        this.decreaseCounter();
      }
    }
  })
  counterTask;

  @(task(function* () {
    let token = waiter.beginAsync();

    this.progress = 0;
    this._style = `width: 0%`;

    while (this.count !== 0) {
      yield rawTimeout(SPEED);

      let currentAmount;
      if (this.progress >= 0 && this.progress < 0.2) {
        currentAmount = 0.1;
      } else if (this.progress >= 0.2 && this.progress < 0.5) {
        currentAmount = 0.04;
      } else if (this.progress >= 0.5 && this.progress < 0.8) {
        currentAmount = 0.02;
      } else if (this.progress >= 0.8 && this.progress < 0.99) {
        currentAmount = 0.005;
      } else {
        currentAmount = 0;
      }

      this.progress += currentAmount;
      if (this.progress > 0.998) {
        this.progress = 0.998;
      }

      this._style = `transition: width ${SPEED}ms linear; width: ${
        this.progress * 100
      }%`;
    }

    this._style = `transition: width ${SPEED}ms linear; width: 100%`;
    yield rawTimeout(SPEED);
    this._style = `transition: opacity ${
      SPEED * 2
    }ms linear; width: 100%; opacity: 0`;

    waiter.endAsync(token);
  }).drop())
  updateTask;
}
