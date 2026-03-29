import EmberApp from 'ember-strict-application-resolver';
import EmberRouter from '@ember/routing/router';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { timeout } from 'ember-concurrency';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';

// Addon services needed by tests
import NavbarService from '#src/services/navbar';
import ProgressService from '#src/services/progress';

// Addon components (re-exports from dist/_app_)
import * as EsBanner from '#src/components/es-banner.gjs';
import * as EsButton from '#src/components/es-button.gjs';
import * as EsCardContent from '#src/components/es-card-content.gjs';
import * as EsCard from '#src/components/es-card.gjs';
import * as EsFooterContributions from '#src/components/es-footer-contributions.gjs';
import * as EsFooterHelp from '#src/components/es-footer-help.gjs';
import * as EsFooterInfo from '#src/components/es-footer-info.gjs';
import * as EsFooterStatement from '#src/components/es-footer-statement.gjs';
import * as EsFooter from '#src/components/es-footer.gjs';
import * as EsHeaderNavbarLink from '#src/components/es-header-navbar-link.gjs';
import * as EsHeader from '#src/components/es-header.gjs';
import * as EsIcon from '#src/components/es-icon.gjs';
import * as EsLinkCard from '#src/components/es-link-card.gjs';
import * as EsNote from '#src/components/es-note.gjs';
import * as EsPagination from '#src/components/es-pagination.gjs';
import * as EsProgressBar from '#src/components/es-progress-bar.gjs';
import * as EsSidebar from '#src/components/es-sidebar.gjs';

class Router extends EmberRouter {
  location = 'none';
  rootURL = '/';
}

// Routes needed by acceptance tests
class BasicyRoute extends Route {
  @service router;
  model() {
    return this.router.transitionTo('fancy');
  }
}

class SlowRoute extends Route {
  @service router;
  async model() {
    await timeout(2000);
    return this.router.transitionTo('fancy');
  }
}

class FancyRoute extends Route {}

class TestApp extends EmberApp {
  modules = {
    './router': Router,
    './services/navbar': NavbarService,
    './services/progress': ProgressService,
    './routes/basicy': BasicyRoute,
    './routes/slow': SlowRoute,
    './routes/fancy': FancyRoute,
  };
}

Router.map(function () {
  this.route('basicy');
  this.route('slow');
  this.route('fancy');
});

export function start() {
  setApplication(
    TestApp.create({
      autoboot: false,
      rootElement: '#ember-testing',
    }),
  );
  setup(QUnit.assert);
  setupEmberOnerrorValidation();
  qunitStart();
}
