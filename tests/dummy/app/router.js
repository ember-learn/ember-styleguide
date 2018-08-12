import AddonDocsRouter, { docsRoute } from "ember-cli-addon-docs/router";
import config from "./config/environment";

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  docsRoute(this, function() {
    this.route("usage");

    this.route("components", function() {
      this.route("es-accordion");
      this.route("es-aside");
      this.route("es-blog-heading");
      this.route("es-button");
      this.route("es-buttonbar");
      this.route("es-card");
      this.route("es-codesample");
      this.route("es-datatable");
      this.route("es-footer");
      this.route("es-form");
      this.route("es-header");
      this.route("es-heading");
      this.route("es-main");
      this.route("es-navbar");
      this.route("es-note");
      this.route("es-pagewrapper");
      this.route("es-search");
      this.route("es-ulist");
    });
  });
  this.route("not-found", { path: "/*path" });
});

export default Router;
