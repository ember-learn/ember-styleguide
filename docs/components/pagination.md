# Pagination

The pagination component takes in model argument which should contain links to the prev and next pages for navigation between next and previous pages
```js
{
  ...,
  links:{
    prev: 'Link',
    next: 'Link',
  }
}
```

## Usage

Add the following code to the template

```
  <EsPagination @model={{@model}}/>
```

