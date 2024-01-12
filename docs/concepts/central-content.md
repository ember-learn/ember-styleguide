# Central content

In our ecosystem we have a sidebar and the central content. This content includes the actual content and an [on this page menu](on-this-page) if there is one. The content should be centered in the container that it's place in. We use the `content-wrapper` class to indicate this structure. The [on this page menu](on-this-page) will dissappear at `80em`.

```html
<div class="content-wrapper">
  <div id="article_1">
    <div class="article-title">
      <h1>
        Introduction
      </h1>
    </div>
    <hr>
    <div><p>This section of the Guides describes the essential features of EmberData, a powerful set of tools for formatting requests, normalizing responses, and efficiently managing a local cache of data.</p>
    <p>Ember.js itself works with any type of back end: REST, JSON:API, GraphQL, or anything else.</p></div>
  </div>
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
  </div>
  ```

  

