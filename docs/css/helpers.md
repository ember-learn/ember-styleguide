# CSS Helper Classes

## Theming Helpers

All of the below will set the desired background color and ensure corresponding foreground colors as well.

### Light Background

If you would like a section or a div to use the dark style then you need to add `class="bg-light"` to the element that you would like to be light.

```html
<div class="bg-light">
  hello there
</div>
```

### Light Muted Background

If you would like a section or a div to use the dark style then you need to add `class="bg-light-muted"` to the element that you would like to be light, but slightly darker.

```html
<div class="bg-light-muted">
  hello there
</div>
```

### Dark Background

If you would like a section or a div to use the dark style then you need to add `class="bg-dark"` to the element that you would like to be dark.

```html
<div class="bg-dark">
  hello there
</div>
```

Please note that there currently is no `bg-dark-muted`, as it's unused.

## Border Helpers

If you want to adjust border properties.

### Rounded Corners

```html
<div class="rounded bg-brand margin-small padding-small text-light">Hello!</div>
```

```html
<div class="rounded-lg margin-small padding-small bg-dark">Hello!</div>
```

## List Styles

If you want to remove default list styling you can use the `list-unstyled` css helper

```html
<ul class="list-unstyled">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

## Spacing Helpers

In order to apply the spacing scale on pages, a set of predefined helper classes exist for both margins and paddings.

### Margin Helpers

<table class="mb-5">
  <thead>
    <tr>
      <th>Scale</th>
      <th>Location</th>
      <th>Helper Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    {{#each 
      (array
        (hash value='' name='all') 
        (hash value='x' name="horizontal") 
        (hash value='y' name="vertical") 
        (hash value='t' name="top") 
        (hash value='r' name="right")
        (hash value='b' name="bottom") 
        (hash value='l' name="left") 
      ) as |direction|
    }}
      {{#each (array '1' '2' '3' '4' '5') as |size|}}
        <tr>
          <td>{{size}}</td>
          <td>{{direction.name}}</td>
          <td><code>.m{{direction.value}}-{{size}}</code></td>
          <td>
            <div class="bg-light-muted border-dashed">
              <div class="bg-dark m{{direction.value}}-{{size}}">Content</div>
            </div>
          </td>
        </tr>
      {{/each}}
    {{/each}}
  </tbody>
</table>

### Padding Helpers

<table class="mb-5">
  <thead>
    <tr>
      <th>Scale</th>
      <th>Location</th>
      <th>Helper Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    {{#each 
      (array
        (hash value='' name='all') 
        (hash value='x' name="horizontal") 
        (hash value='y' name="vertical") 
        (hash value='t' name="top") 
        (hash value='r' name="right")
        (hash value='b' name="bottom") 
        (hash value='l' name="left") 
      ) as |direction|
    }}
      {{#each (array '1' '2' '3' '4' '5') as |size|}}
        <tr>
          <td>{{size}}</td>
          <td>{{direction.name}}</td>
          <td><code>.p{{direction.value}}-{{size}}</code></td>
          <td>
            <div class="bg-light-muted border-dashed ">
              <div class="bg-dark p{{direction.value}}-{{size}}">Content</div>
            </div>
          </td>
        </tr>
      {{/each}}
    {{/each}}
  </tbody>
</table>

### Responsive Videos

```html
<div class="embed-video">
  <!-- code from YouTube -->
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/rY5D38RQoEg"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  <!-- /code from YouTube -->
</div>
```
