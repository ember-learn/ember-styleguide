# Pagination

Adds back and forth pagination, using `named blocks`. You insert your previous link into a `<:previous></:previous>` block and the next link into a `<:next></:next>` block. This will add the underline styling to the link and an animated arrow to your link. You will use the `showPrevious` and `showNext` prop to make sure the correct links are visible.

## Usage

Add the following code to the template

```handlebars
  <EsPagination @showPrevious={{true}} @showNext={{true}}>
    <:previous> 
        <LinkTo @route="page" @model={{this.previousId}}>
          Newer articles
        </LinkTo>
    </:previous>
    <:next>
      <LinkTo @route="page" @model={{this.nextId}}>
        Older articles
      </LinkTo>
    </:next>
  </EsPagination>
```

To only show the previous you've to pass `false` to the `showNext` prop.

```handlebars
  <EsPagination @showPrevious={{true}} @showNext={{false}}>
    <:previous> 
        <LinkTo @route="page" @model={{this.previousId}}>
          Newer articles
        </LinkTo>
    </:previous>
    <:next>
      <LinkTo @route="page" @model={{this.nextId}}>
        Older articles
      </LinkTo>
    </:next>
  </EsPagination>
```

To only show the previous you've to pass `false` to the `showPrevious` prop.

```handlebars
  <EsPagination @showPrevious={{false}} @showNext={{true}}>
    <:previous> 
        <LinkTo @route="page" @model={{this.previousId}}>
          Newer articles
        </LinkTo>
    </:previous>
    <:next>
      <LinkTo @route="page" @model={{this.nextId}}>
        Older articles
      </LinkTo>
    </:next>
  </EsPagination>
```
