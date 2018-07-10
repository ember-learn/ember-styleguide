# UList

{{#docs-demo as |demo|}}
  {{#demo.example name='es-ulist'}}
    {{#es-ulist list=normalList as |item|}}
      {{es-ulist/text item=item}}
    {{/es-ulist}}
  {{/demo.example}}
  {{demo.snippet 'es-ulist'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-ulist-imagelist'}}
    {{#es-ulist list=imageList as |item|}}
      {{#es-ulist/image item=item as |item|}}
        {{es-ulist/text item=item isNonBlock=true}}
      {{/es-ulist/image}}
    {{/es-ulist}}
  {{/demo.example}}
  {{demo.snippet 'es-ulist-imagelist'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='es-ulist-linklist'}}
    {{#es-ulist list=linkList as |item|}}
      {{#es-ulist/image item=item as |item|}}
          {{es-ulist/link item=item isExternal=true}}
      {{/es-ulist/image}}
    {{/es-ulist}}
  {{/demo.example}}
  {{demo.snippet 'es-ulist-linklist'}}
{{/docs-demo}}
