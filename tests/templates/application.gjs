import EsProgressBar from '#src/components/es-progress-bar.gjs';
import RouteTemplate from 'ember-route-template';

/**
 * Ember.js below 6.3 needs the wrapper to use a component as a route template.
 */
export default RouteTemplate(
  <template>
    <EsProgressBar />

    {{outlet}}
  </template>,
);
