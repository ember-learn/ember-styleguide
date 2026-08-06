import { Page } from 'kolay/components';

<template>
  <Page>
    <:pending>
      <div class="docs-loading" role="status">Loading...</div>
    </:pending>

    <:error as |error|>
      <div class="docs-error" role="alert">
        {{error}}
      </div>
    </:error>

    <:success as |Prose|>
      <article class="docs-page">
        <Prose />
      </article>
    </:success>
  </Page>
</template>
