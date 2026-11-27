import Route from '@ember/routing/route';
import { handlePotentialIndexVisit } from 'kolay';

export default class PageRoute extends Route {
  beforeModel(transition) {
    handlePotentialIndexVisit(this, transition);
  }
}
