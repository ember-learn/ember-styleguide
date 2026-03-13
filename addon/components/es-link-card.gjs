/* eslint-disable ember/no-empty-glimmer-component-classes */
import Component from '@glimmer/component';

export default class EsLinkCardComponent extends Component {}

<li class="card card--link" ...attributes>
  <EsCardContent @icon={{@icon}}>
    <h3><a href={{@href}}>{{@title}}</a></h3>

    {{yield}}
  </EsCardContent>
</li>