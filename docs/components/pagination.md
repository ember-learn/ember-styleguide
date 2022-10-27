# Pagination

Adds back and forth pagination, when provided with a `previous` object and a `next` object. These objects should look like this: 
```js
const object = {
  route: "String",
  model: {},
  text: "The text that will show in the pagination"
}
```

## Usage

Add the following code to the template

```handlebars
  <EsPagination @previous={{hash text="Older articles" route="prev"}} @next={{hash text="Newer articles" route="next"}}/>
```

The example below show what happens if you only provide the `previous` object when it's the last page you are on.

```handlebars
  <EsPagination @previous={{hash text="One before last article" route="prev"}}/>
```
The example below show what happens if you only provide the `next` object when it's the first page you are on.

```handlebars
  <EsPagination @next={{hash text="Second article" route="next"}}/>
```
