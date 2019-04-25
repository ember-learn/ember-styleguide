# Accordion

{{#docs-demo as |demo|}}
  {{#demo.example name='es-accordion.hbs'}}
    {{#es-accordion as |accordionState|}}
      {{#es-accordion/es-item
        title="JavaScript Modules API"
        status="shipped"
        accordionItemIndex=0
        accordionState=accordionState}}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi culpa magnam quam sed exercitationem alias corrupti aspernatur illo nobis eos dicta esse quasi assumenda officiis nostrum, impedit voluptates commodi.</p>
      {{/es-accordion/es-item}}

      {{#es-accordion/es-item
        title="Module Unification"
        status="inProgress"
        accordionItemIndex=1
        accordionState=accordionState}}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi culpa magnam quam sed exercitationem alias corrupti aspernatur illo nobis eos dicta esse quasi assumenda officiis nostrum, impedit voluptates commodi.</p>
      {{/es-accordion/es-item}}

      {{#es-accordion/es-item
        title="Code Splitting"
        status="rfcSubmitted"
        accordionItemIndex=2
        accordionState=accordionState}}
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi culpa magnam quam sed exercitationem alias corrupti aspernatur illo nobis eos dicta esse quasi assumenda officiis nostrum, impedit voluptates commodi.</p>
      {{/es-accordion/es-item}}

    {{/es-accordion}}
  {{/demo.example}}
  {{demo.snippet 'es-accordion.hbs'}}
{{/docs-demo}}

{{docs-note}}
