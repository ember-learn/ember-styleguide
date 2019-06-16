# Accordion

```handlebars
<EsAccordion as |accordionState EsItem|>
  <h1>hello</h1>
  <EsItem
    @title="JavaScript Modules API"
    @status="shipped"
    @accordionItemIndex=0
    @accordionState={{accordionState}}
  >
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi culpa magnam quam sed exercitationem alias corrupti aspernatur illo nobis eos dicta esse quasi assumenda officiis nostrum, impedit voluptates commodi.</p>
  </EsItem>

  <EsItem
    @title="Module Unification"
    @status="inProgress"
    @accordionItemIndex=1
    @accordionState={{accordionState}}
  >
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi culpa magnam quam sed exercitationem alias corrupti aspernatur illo nobis eos dicta esse quasi assumenda officiis nostrum, impedit voluptates commodi.</p>
  </EsItem>

  <EsItem
    @title="Code Splitting"
    @status="rfcSubmitted"
    @accordionItemIndex=2
    @accordionState={{accordionState}}
  >
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nisi culpa magnam quam sed exercitationem alias corrupti aspernatur illo nobis eos dicta esse quasi assumenda officiis nostrum, impedit voluptates commodi.</p>
  </EsItem>

</EsAccordion>
```
