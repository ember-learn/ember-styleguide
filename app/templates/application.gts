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
      <ul class="table-of-contents">
        <li class="toc-item">
          <a href="/">Home</a>
        </li>
        <li class="toc-heading">Components</li>
        <li class="toc-item"><a href="/components/banner">Banner</a></li>
        <li class="toc-item"><a href="/components/button">Button</a></li>
        <li class="toc-item"><a href="/components/card">Card</a></li>
        <li class="toc-item"><a href="/components/footer">Footer</a></li>
        <li class="toc-item"><a href="/components/header">Header</a></li>
        <li class="toc-item"><a href="/components/link-card">Link Card</a></li>
        <li class="toc-item"><a href="/components/note">Note</a></li>
        <li class="toc-item"><a href="/components/pagination">Pagination</a></li>
        <li class="toc-item"><a href="/components/progress-bar">Progress Bar</a></li>
        <li class="toc-item"><a href="/components/sidebar">Sidebar</a></li>
        <li class="toc-heading">Concepts</li>
        <li class="toc-item"><a href="/concepts/accessibility">Accessibility</a></li>
        <li class="toc-item"><a href="/concepts/background-shapes">Background Shapes</a></li>
        <li class="toc-item"><a href="/concepts/central-content">Central Content</a></li>
        <li class="toc-item"><a href="/concepts/colors">Colors</a></li>
        <li class="toc-item"><a href="/concepts/header-anchor">Header Anchor</a></li>
        <li class="toc-item"><a href="/concepts/layout">Layout</a></li>
        <li class="toc-item"><a href="/concepts/markdown">Markdown</a></li>
        <li class="toc-item"><a href="/concepts/on-this-page">On This Page</a></li>
        <li class="toc-item"><a href="/concepts/table-of-contents">Table of Contents</a></li>
        <li class="toc-item"><a href="/concepts/typography">Typography</a></li>
        <li class="toc-item"><a href="/concepts/wells">Wells</a></li>
        <li class="toc-heading">CSS</li>
        <li class="toc-item"><a href="/css/overview">Overview</a></li>
        <li class="toc-item"><a href="/css/global">Global</a></li>
        <li class="toc-item"><a href="/css/helpers">Helpers</a></li>
      </ul>
    </nav>

    <main class="docs-content">
      {{outlet}}
    </main>
  </div>

  <EsFooter />
</template>
