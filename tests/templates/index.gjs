import { LinkTo } from '@ember/routing';
import RouteTemplate from 'ember-route-template';

/**
 * Ember.js below 6.3 needs the wrapper to use a component as a route template.
 */
export default RouteTemplate(
  <template>
    <LinkTo @route="basicy" data-test-basic-route>Go to my basic route</LinkTo>
    <LinkTo @route="slow" data-test-slow-route>Go to my slow route</LinkTo>
  </template>,
);
