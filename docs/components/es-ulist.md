# List

The list component is an unstyled, unordered list. A title must be defined, but can be visually hidden.

## Uses

### Unstyled, Unordered List

```handlebars
    {{es-ulist listTitle="Zoey by City" listItems=listItems}}
  
```

### With Images

```handlebars
    {{es-ulist listTitle="Zoey by City" listItems=listItems hasImage=true}}
  
```

### With Links

```handlebars
    {{es-ulist listTitle="Zoey by City" listItems=listItems hasImage=true hasLink=true}}
  
```

## Other use cases

- to add a border: 'hasBorder=true'
- to use an ordered list: 'isUnorderedList=false',
- to visually hide the list title (it still must exist for A11y): 'isTitleVisible=false' 

<aside role="note">

Have ideas for this component? Submit an issue or a PR at [https://github.com/ember-learn/ember-styleguide](https://github.com/ember-learn/ember-styleguide).

</aside>