import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('show', { path: ':id' });
  // this.route('concepts', function() {
  //   this.route('colours');
  //   this.route('layout');
  //   this.route('typeography');
  // })
  //
  // this.route('demo-components', { path: 'components/:id' });
  //
  // this.route('css', function() {
  //   this.route('overview');
  //   this.route('helpers');
  // });
  //
  // this.route('demo');
});

export default Router;
