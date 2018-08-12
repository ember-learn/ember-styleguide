# List

The list component is an unstyled, unordered list. A title must be defined, but can be visually hidden.

## Uses

### Unstyled, Unordered List

{{#docs-demo as |demo|}}
  {{#demo.example name='es-ulist.hbs'}}
    {{es-ulist listTitle="Zoey by City" listItems=listItems}}
  {{/demo.example}}
  {{demo.snippet 'es-ulist.hbs'}}
{{/docs-demo}}

### With Images

{{#docs-demo as |demo|}}
  {{#demo.example name='es-ulist-imagelist.hbs'}}
    {{es-ulist listTitle="Zoey by City" listItems=listItems hasImage=true}}
  {{/demo.example}}
  {{demo.snippet 'es-ulist-imagelist.hbs'}}
{{/docs-demo}}

### With Links

{{#docs-demo as |demo|}}
  {{#demo.example name='es-ulist-linklist.hbs'}}
    {{es-ulist listTitle="Zoey by City" listItems=listItems hasImage=true hasLink=true}}
  {{/demo.example}}
  {{demo.snippet 'es-ulist-linklist.hbs'}}
{{/docs-demo}}

## Other use cases

- to add a border: 'hasBorder=true'
- to use an ordered list: 'isUnorderedList=false',
- to visually hide the list title (it still must exist for A11y): 'isTitleVisible=false' 

<aside role="note">

Have ideas for this component? Submit an issue or a PR at [https://github.com/ember-learn/ember-styleguide](https://github.com/ember-learn/ember-styleguide).

</aside>