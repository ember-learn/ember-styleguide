import Route from '@ember/routing/route';
import links from 'ember-styleguide/data/navbar-links';

export default Route.extend({
  model() {
    return links;
  }
});
