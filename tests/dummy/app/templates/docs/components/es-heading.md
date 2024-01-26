# Heading

<DocsDemo as |demo|>
  <demo.example @name="es-heading">
    <EsHeading @headingText="This is a heading text" />
  </demo.example>
  <demo.snippet @name="es-heading" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="es-heading-block">
    <EsHeading>
      This is a heading text <span>🐹</span>
    </EsHeading>
  </demo.example>
  <demo.snippet @name="es-heading-block" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="es-heading-centered">
    <EsHeading @headingText="This is a heading text" @isCentered={{true}} />
  </demo.example>
  <demo.snippet @name="es-heading-centered" />
</DocsDemo>

<DocsDemo as |demo|>
  <demo.example @name="es-heading-page-heading">
    <EsHeading @headingText="This is a heading text" @isPageHeading={{true}} />
  </demo.example>
  <demo.snippet @name="es-heading-page-heading" />
</DocsDemo>

{{docs-note}}
