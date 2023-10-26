# Table of Contents

Instead of providing a component we provide this concept for our table of contents. You can see the concept below.
Every item in the list is either a `toc-heading`, giving it heading styling, or an `toc-item`. The `anchor`-tags wrapped in a `toc-item` will get specific styling. On the main level, not wrapped in a `sub-table-of-contents`, they will be the brand-color. When they are wrapped in a `sub-table-of-contents`, they will have an "active" indicator and a hover state, this will also indent them from the main level.

```html
<ul class="table-of-contents">
  <li class="toc-heading">Introduction</li>
  <li class="toc-item">
    <a href="#">Getting Started</a>
  </li>
  <li class="toc-item">
    <a href="#">Tutorial</a>
  </li>
  <li class="toc-heading">Core Concepts</li>
  <li class="toc-item">
    <a href="#">Components</a>
  </li>
  <li class="toc-item">
    <a href="#"> Routing </a>
    <ul class="table-of-contents sub-table-of-contents">
      <li class="toc-item">
        <a href="#">Introduction</a>
      </li>
      <li class="toc-item">
        <a href="#">Defining Your Routes</a>
      </li>
      <li class="toc-item selected">
        <a href="#">Linking Between Routes</a>
      </li>
    </ul>
  </li>
  <li class="toc-item">
    <a href="#">Services</a>
  </li>
  <li class="toc-item">
    <a href="#">EmberData</a>
  </li>
  <li class="toc-item">
    <a href="#">In-Depth Topics</a>
  </li>
</ul>
```
