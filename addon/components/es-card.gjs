/* eslint-disable ember/no-empty-glimmer-component-classes */
import Component from '@glimmer/component';

export default class EsCardComponent extends Component {}

<li class="card {{if @image 'card--image'}}" ...attributes>
  <EsCardContent @icon={{@icon}} @image={{@image}}>
    {{yield}}
  </EsCardContent>
</li>