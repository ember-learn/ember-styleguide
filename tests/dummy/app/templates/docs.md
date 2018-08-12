{{#docs-viewer as |viewer|}}

  {{#viewer.nav as |nav|}}
    {{nav.section 'Components'}}
    {{nav.item 'Accordion' 'docs.components.es-accordion'}}
    {{nav.item 'Form' 'docs.components.es-form'}}
    {{nav.item 'List' 'docs.components.es-ulist'}}
    {{nav.item 'Aside' 'docs.components.es-aside'}}
    {{nav.item 'Blog heading' 'docs.components.es-blog-heading'}}
    {{nav.item 'Button' 'docs.components.es-button'}}
    {{nav.item 'Buttonbar' 'docs.components.es-buttonbar'}}
    {{nav.item 'Card' 'docs.components.es-card'}}
    {{nav.item 'Codesample' 'docs.components.es-codesample'}}
    {{nav.item 'Datatable' 'docs.components.es-datatable'}}
    {{nav.item 'Footer' 'docs.components.es-footer'}}
    {{nav.item 'Header' 'docs.components.es-header'}}
    {{nav.item 'Heading' 'docs.components.es-heading'}}
    {{nav.item 'Main' 'docs.components.es-main'}}
    {{nav.item 'Navbar' 'docs.components.es-navbar'}}
    {{nav.item 'Note' 'docs.components.es-note'}}
    {{nav.item 'Pagewrapper' 'docs.components.es-pagewrapper'}}
    {{nav.item 'Search' 'docs.components.es-search'}}
  {{/viewer.nav}}

  {{#viewer.main}}
    <div class="docs-container">
      <div class="docs-section">
        {{outlet}}
      </div>
    </div>
  {{/viewer.main}}

{{/docs-viewer}}
