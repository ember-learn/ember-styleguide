import Route from '@ember/routing/route';
import links from '../data/navbar-links';

export default Route.extend({
  model() {
    return links;
  }
});
