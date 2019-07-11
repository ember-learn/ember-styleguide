# Layout

## Grid

### Grid Usage
A grid can be formed with fixed boxes by arranging tiles in an inline block, icons in toolbars, etc. Column count grows with browser width. Tiles wrap to the next line, or are sometimes truncated with an overflow scroll. The column width is defined by the column classes, if no width is defined the columns will resize to fit the row.

#### Center Aligned fixed width column
Example of a centered half column. A column class is used to limit its width.
```html
<div class="row justify-center">
  <div class="col-one-half text-center">
    <h2>Build with the teams that never stop shipping.</h2>
    <p>Some of the best development teams in the world have been iterating on their products for years with Ember. With scalable UI architecture baked-in from the start, you’ll be working with the same patterns these organizations use every step of the way.</p>
  </div>
</div>
```

### Left Aligned fixed width

```html
<div class="row">
  <div class="col-one-half">
    <h3>A Simple Component</h3>
    <p>Ember Components are a superset of HTML – that means is a full-fledged Ember Component! To pass data into Components, use the @ symbol along with an argument name.</p>
  </div>
</div>
```


### Equally Distributed Columns

```html
<div class="row">
  <div class="col">
    <div class="card text-center">
      <div class="card-content">
        <h3>Podcasts</h3>
        <p>Rock n' Roll with EmberJS.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card text-center">
      <div class="card-content">
        <h3>Books</h3>
        <p>Rock n' Roll with EmberJS.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card text-center">
      <div class="card-content">
        <h3>Videos</h3>
        <p>Rock n' Roll with EmberJS.</p>
      </div>
    </div>
  </div>
</div>
```

```html
<div class="row">
  <div class="col">
    <div class="card">
      <div class="card-content">
        <h3>Guides</h3>
        <p>If you're familiar with JavaScript and web application development, our Guides will teach you everything you need to know to get started building with Ember.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-content">
        <h3>Read Our Blog</h3>
        <p>Find out about the newest releases and latest work happening in the ecosystem by visiting the official Ember Blog.</p>
      </div>
    </div>
  </div>
</div>
```

### Photo Grid

```html
<div class="row align-end">
  <div class="col">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/400x500/000/fff">
  </div>
  <div class="col">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/500x300/000/fff">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/600x400/000/fff">
  </div>
  <div class="col">
    <img class="img-fluid margin-bottom-small" src="https://dummyimage.com/400x500/000/fff">
  </div>
</div>
```
## Spacing Scale
The spacing scale is used to manage spacing a white-space within layouts and components.
The spacing scale can be applied to both margin and padding properties.

<div class="row">
  <div class="card col">
    <div class="spacer-xsmall bg-orange">
    </div>
    <div class="card-content">
      <h4>Extra Small Offset</h4>
    </div>
  </div>
  <div class="card col">
    <div class="spacer-small bg-orange">
    </div>
    <div class="card-content">
      <h4>Small Offset</h4>
    </div>
  </div>
  <div class="card col">
    <div class="spacer-medium bg-orange">
    </div>
    <div class="card-content">
      <h4>Medium Offset</h4>
    </div>
  </div>
  <div class="card col">
    <div class="spacer-large bg-orange">
    </div>
    <div class="card-content">
      <h4>Large Offset</h4>
    </div>
  </div>
  <div class="card col">
    <div class="spacer-xlarge bg-orange">
    </div>
    <div class="card-content">
      <h4>Extra Large Offset</h4>
    </div>
  </div>
</div><!--row-->


## Applying Spacing with Helpers
In order to apply the spacing scale on pages, a set of predefined helper classes exist for both margins and paddings. 

### Margin Helpers

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
    <tr>
      <td>Small</td>
      <td>All Sides</td>
      <td><code>.margin-small</code></td>
      <td>
        <div class="bg-muted border-dashed">
          <div class="bg-orange margin-small">Content</div>
        </div>
      </td>
    </tr>
     <tr>
      <td>Small</td>
      <td>Vertical Sides</td>
      <td><code>.margin-vertical-small</code></td>
      <td>
        <div class="bg-muted border-dashed">
          <div class="bg-orange margin-vertical-small">Content</div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Horizontal Sides</td>
      <td><code>.margin-horizontal-small</code></td>
      <td>
        <div class="bg-muted border-dashed">
          <div class="bg-orange margin-horizontal-small">Content</div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Top</td>
      <td><code>.margin-top-small</code></td>
      <td>
        <div class="bg-muted border-dashed">
          <div class="bg-orange margin-top-small">Content</div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Bottom</td>
      <td><code>.margin-bottom-small</code></td>
      <td>
        <div class="bg-muted border-dashed">
          <div class="bg-orange margin-bottom-small">Content</div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Left</td>
      <td><code>.margin-left-small</code></td>
      <td>
        <div class="bg-muted border-dashed">
          <div class="bg-orange margin-left-small">Content</div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Right</td>
      <td><code>.margin-right-small</code></td>
      <td>
        <div class="bg-muted border-dashed">
          <div class="bg-orange margin-right-small">Content</div>
        </div>
      </td>
    </tr>

  </tbody>
</table>

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
    <tr>
      <td>Small</td>
      <td>All Sides</td>
      <td><code>.padding-small</code></td>
      <td>
          <div class="bg-orange padding-small">
            <div class="border-dashed">Content</div>
          </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>All Vertical Sides</td>
      <td><code>.padding-vertical-small</code></td>
      <td>
          <div class="bg-orange padding-vertical-small">
            <div class="border-dashed">Content</div>
          </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>All Horizontal Sides</td>
      <td><code>.padding-horizontal-small</code></td>
      <td>
          <div class="bg-orange padding-horizontal-small">
            <div class="border-dashed">Content</div>
          </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Top</td>
      <td><code>.padding-top-small</code></td>
      <td>
          <div class="bg-orange padding-top-small">
            <div class="border-dashed">Content</div>
          </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Bottom</td>
      <td><code>.padding-bottom-small</code></td>
      <td>
          <div class="bg-orange padding-bottom-small">
            <div class="border-dashed">Content</div>
          </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Left</td>
      <td><code>.paddding-left-small</code></td>
      <td>
          <div class="bg-orange padding-left-small">
            <div class="border-dashed">Content</div>
          </div>
      </td>
    </tr>
    <tr>
      <td>Small</td>
      <td>Right</td>
      <td><code>.padding-right-small</code></td>
      <td>
          <div class="bg-orange padding-right-small">
            <div class="border-dashed">Content</div>
          </div>
      </td>
    </tr>

  </tbody>
</table>