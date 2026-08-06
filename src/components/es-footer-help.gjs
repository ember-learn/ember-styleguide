import Component from '@glimmer/component';

export default class EsFooterHelpComponent extends Component {
  get linkUrl() {
    return (
      this.args.contributeLink || 'https://github.com/ember-learn/ember-website'
    );
  }

  <template>
    {{! template-lint-disable no-whitespace-for-layout }}
    <div class="footer-help">
      <p class="container py-1">

        If you want help you can contact us by
        <a href="mailto:help@emberjs.com?subject=Help">email</a>, open an
        <a href="{{this.linkUrl}}/issues/new"> issue</a>, or get realtime help
        by joining the
        <a href="https://discord.gg/emberjs">Ember Discord</a>.

      </p>
    </div>
  </template>
}
