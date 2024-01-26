# Navbar

The navbar comes with the default Ember links, if you would like to override the default links you can pass a json object to update the links in the navbar.

<DocsDemo as |demo|>
  <demo.example @name="es-navbar-default.hbs">
    {{es-navbar}}
  </demo.example>
  <demo.snippet @name="es-navbar-default.hbs" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="es-navbar-custom.hbs">
    <EsNavbar @links={{customLinks}} />
  </demo.example>
  <demo.snippet @name="es-navbar-custom.hbs" />
</DocsDemo>

{{docs-note}}
