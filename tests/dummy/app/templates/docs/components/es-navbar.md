# Navbar

The navbar comes with the default Ember links, if you would like to override the default links you can pass a json object to update the links in the navbar.

{{#docs-demo as |demo|}}
  {{#demo.example name='es-navbar-default.hbs'}}
    {{es-navbar}}
  {{/demo.example}}
  {{demo.snippet 'es-navbar-default.hbs'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-navbar-custom.hbs'}}
    {{es-navbar links=customLinks}}
  {{/demo.example}}
  {{demo.snippet 'es-navbar-custom.hbs'}}
{{/docs-demo}}

{{docs-note}}
