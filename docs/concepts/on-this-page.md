# On This Page

To allow the users easy and quick access to all the content on the page we provide styling for an `on this page` list, using the `on-this-page-wrapper` class will make sure that the styling of the links is good, and also that it disappears at `80em` to keep the page responsive. This concept should be used within the [central-content](central-content) concept.

```html
  <div class="on-this-page-wrapper">
    <div class="on-this-page-wrapper-header">On this page</div>
    <hr>
    <ul>
        <li>
          <a href="#toc_what-are-emberdata-models">What are EmberData models?</a>
        </li>
        <li>
          <a href="#toc_emberdata-flexibility">EmberData flexibility</a>
        </li>
        <li>
          <a href="#toc_the-store-and-a-single-source-of-truth">The Store and a Single Source of Truth</a>
        </li>
        <li>
          <a href="#toc_injecting-the-store">Injecting the store</a>
        </li>
        <li>
          <a href="#toc_models">Models</a>
        </li>
        <li>
          <a href="#toc_records">Records</a>
        </li>
        <li>
          <a href="#toc_adapter">Adapter</a>
        </li>
        <li>
          <a href="#toc_caching">Caching</a>
        </li>
        <li>
          <a href="#toc_architecture-overview">Architecture Overview</a>
        </li>
    </ul>
  </div>
```
