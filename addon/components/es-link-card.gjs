import EsCardContent from './es-card-content';

<template>
  <li class="card card--link" ...attributes>
    <EsCardContent @icon={{@icon}}>
      <h3><a href={{@href}}>{{@title}}</a></h3>

      {{yield}}
    </EsCardContent>
  </li>
</template>
