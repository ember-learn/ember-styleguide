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
<div class="rounded bg-brand m-1 p-1 text-light">Hello!</div>
```

```html
<div class="rounded-lg m-1 p-1 bg-dark">Hello!</div>
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
      {{#each (array '0' '1' '2' '3' '4' '5') as |size|}}
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
      {{#each (array '0' '1' '2' '3' '4' '5') as |size|}}
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

### Flex helpers

We provide a few `flex` helpers to make it easier to position elements on your page. All classes provide the `display: flex` property.

`.flex-horizontal-between` does `justify-content: space-between`.
```html
<div class="flex-horizontal-between">
  <button>Let's do this</button><button>Don't do this</button>
</div>
```

`.flex-center` does `justify-content: center` and `align-items: center`, making sure your content is centered.
```html
<div class="flex-centered">
  <button>Let's do this</button><button>Don't do this</button>
</div>
```

`.flex-responsive` adds `flex-wrap: wrap` to your element, making sure the content wraps with the parent. It adds a `gap` too. You can resize the window to see the effect of the class.
```html
<div class="flex-responsive">
  <button>Let's do this</button><button>Don't do this</button>
</div>
```

You can also combine these helper-classes, allowing the content to wrap and stay centered.
```html
<div class="flex-centered flex-responsive">
  <button>Let's do this</button><button>Don't do this</button>
</div>
```

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

### Hide elements on mobile

If you would like to hide any element only on mobile screens you can use the `.hide-on-mobile` class helper.

```html
<h1 class="hide-on-mobile">A secret message for desktop users: ♥️</h1>

<p>If you can see the secret message above try resizing the window!</p>
```

## Turn off link-underline styles

You will probably have noticed that all links automatically have custom underline functionality:

```html
<div class="p-3">
  <a href="https://emberjs.com/">Ember Homepage</a>
</div>
```

To get the style that we wanted we needed to implement a custom background image for all links instead of making use of the `text-decoration: underline` styles. If you have a link (or a set of links) that you would like to turn off this behaviour then you can use the `bg-none` helper to turn off this styling:

```html
<div class="p-3 bg-none">
  <a href="https://emberjs.com/">Ember Homepage</a>
</div>
```
