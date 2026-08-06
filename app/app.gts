import EmberApp from 'ember-strict-application-resolver';
import EmberRouter from '@ember/routing/router';
import { properLinks } from 'ember-primitives/proper-links';
import { addRoutes } from 'kolay';
import PageTitleService from 'ember-page-title/services/page-title';
import legacyInspectorSupport from '@embroider/legacy-inspector-support/ember-source-4.12';

// Addon services (resolved via vite alias to ./dist/)
import NavbarService from '#src/services/navbar';
import ProgressService from '#src/services/progress';

@properLinks
class Router extends EmberRouter {
  location = 'history';
  rootURL = '/';
}

export class App extends EmberApp {
  inspector = legacyInspectorSupport(this);
  modules = {
    './router': Router,
    './services/page-title': PageTitleService,
    './services/navbar': NavbarService,
    './services/progress': ProgressService,
    ...import.meta.glob('./templates/**/*.{gts,gjs,hbs}', { eager: true }),
    ...import.meta.glob('./routes/**/*', { eager: true }),
  };
}

Router.map(function () {
  addRoutes(this);
});
