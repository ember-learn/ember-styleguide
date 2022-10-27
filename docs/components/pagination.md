# Pagination

Adds back and forth pagination, using `named blocks`. You insert your previous link into a `<:previous></:previous>` block and the next link into a `<:next></:next>` block. This will add the underline styling to the link and an animated arrow to your link.

## Usage

Add the following code to the template

```handlebars
  <EsPagination>
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

The example below show what happens if you only provide the `previous` block when it's the last page you are on.

```handlebars
  <EsPagination>
    <:previous> 
        <LinkTo @route="page" @model={{this.previousId}}>
          Newer articles
        </LinkTo>
    </:previous>
  </EsPagination>
```
The example below show what happens if you only provide the `next` block when it's the first page you are on.

```handlebars
  <EsPagination>
    <:next>
      <LinkTo @route="page" @model={{this.nextId}}>
        Older articles
      </LinkTo>
    </:next>
  </EsPagination>
```
