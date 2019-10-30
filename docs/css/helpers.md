# CSS Helper Classes

## Theming Helpers

### Dark Background

If you would like a section or a div to use the dark style then you need to add `class="bg-dark"` to the element that you would like to be dark. This helper class sets the background to the dark colour and automatically sets the text colour to be white

```html
<div class="bg-dark">
  hello there
</div>
```

## Border Helpers

If you want to adjust border properties.

### Rounded Corners

```html
<div class="rounded-small bg-brand margin-small padding-small text-light">Hello!</div>
```

```html
<div class="rounded-large margin-small padding-small bg-dark">Hello!</div>
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
              <div class="bg-muted border-dashed">
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
