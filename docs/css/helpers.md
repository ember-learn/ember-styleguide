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

<div>
  <table class="margin-bottom-medium">
    <thead>
      <tr>
        <th>Scale</th>
        <th>Location</th>
        <th>Helper Class</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      {{#each (array '-small' '-medium' '-large') as |size|}}
        {{#each (array '' '-vertical' '-horizontal' '-top' '-bottom' '-left' '-right') as |direction|}}
          <tr>
            <td>{{size}}</td>
            <td>{{direction}}</td>
            <td><code>.margin{{direction}}{{size}}</code></td>
            <td>
              <div class="bg-light-muted border-dashed">
                <div class="bg-brand margin{{direction}}{{size}}">Content</div>
              </div>
            </td>
          </tr>
        {{/each}}
      {{/each}}
    </tbody>
  </table>
</div>

### Padding Helpers

<table>
  <thead>
    <tr>
      <th>Scale</th>
      <th>Location</th>
      <th>Helper Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    {{#each (array '-small' '-medium' '-large') as |size|}}
      {{#each (array '' '-vertical' '-horizontal' '-top' '-bottom' '-left' '-right') as |direction|}}
        <tr>
          <td>{{size}}</td>
          <td>{{direction}}</td>
          <td><code>.padding{{direction}}{{size}}</code></td>
          <td>
              <div class="bg-brand padding{{direction}}{{size}}">
                <div class="border-dashed">Content</div>
              </div>
          </td>
        </tr>
      {{/each}}
    {{/each}}
  </tbody>
</table>
