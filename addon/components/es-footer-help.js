/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';

export default class EsFooterHelpComponent extends Component {

    get linkUrl() {
        return this.args.contributeLink || 'https://github.com/ember-learn/ember-website';
      }
}
