import EsCardContent from './es-card-content';

<template>
  <li class="card {{if @image 'card--image'}}" ...attributes>
    <EsCardContent @icon={{@icon}} @image={{@image}}>
      {{yield}}
    </EsCardContent>
  </li>
</template>
