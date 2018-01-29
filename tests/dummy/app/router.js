import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('learn', function() {
    this.route('quick-start');
    this.route('tutorial');
    this.route('deprecation');
    this.route('showcase');
  });
  this.route('guides');
  this.route('api', function() {
    this.route('ember-data');
  });
  this.route('community', function() {
    this.route('meetups');
    this.route('mascots');
    this.route('guidelines');
    this.route('logos');
  });
  this.route('blog');
  this.route('builds', function() {
    this.route('canary');
    this.route('beta');
    this.route('release');
  });
  this.route('team');
  this.route('sponsors');
  this.route('security');
  this.route('legal');
  this.route('ember-users');
});

export default Router;
