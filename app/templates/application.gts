import { pageTitle } from 'ember-page-title';

import EsHeader from '#src/components/es-header';
import EsFooter from '#src/components/es-footer';
import EsProgressBar from '#src/components/es-progress-bar';

<template>
  {{pageTitle "Ember Styleguide"}}

  <EsProgressBar />
  <EsHeader @home="/" />

  <div class="docs-layout">
    <nav class="docs-sidebar">
      <h3><a href="/">Home</a></h3>

      <h4>Components</h4>
      <ul>
        <li><a href="/components/banner">Banner</a></li>
        <li><a href="/components/button">Button</a></li>
        <li><a href="/components/card">Card</a></li>
        <li><a href="/components/footer">Footer</a></li>
        <li><a href="/components/header">Header</a></li>
        <li><a href="/components/link-card">Link Card</a></li>
        <li><a href="/components/note">Note</a></li>
        <li><a href="/components/pagination">Pagination</a></li>
        <li><a href="/components/progress-bar">Progress Bar</a></li>
        <li><a href="/components/sidebar">Sidebar</a></li>
      </ul>

      <h4>Concepts</h4>
      <ul>
        <li><a href="/concepts/accessibility">Accessibility</a></li>
        <li><a href="/concepts/background-shapes">Background Shapes</a></li>
        <li><a href="/concepts/central-content">Central Content</a></li>
        <li><a href="/concepts/colors">Colors</a></li>
        <li><a href="/concepts/header-anchor">Header Anchor</a></li>
        <li><a href="/concepts/layout">Layout</a></li>
        <li><a href="/concepts/markdown">Markdown</a></li>
        <li><a href="/concepts/on-this-page">On This Page</a></li>
        <li><a href="/concepts/table-of-contents">Table of Contents</a></li>
        <li><a href="/concepts/typography">Typography</a></li>
        <li><a href="/concepts/wells">Wells</a></li>
      </ul>

      <h4>CSS</h4>
      <ul>
        <li><a href="/css/overview">Overview</a></li>
        <li><a href="/css/global">Global</a></li>
        <li><a href="/css/helpers">Helpers</a></li>
      </ul>
    </nav>

    <main class="docs-content">
      {{outlet}}
    </main>
  </div>

  <EsFooter />
</template>
