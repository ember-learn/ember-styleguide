import Component from '@glimmer/component';

export default class EsFooterStatementComponent extends Component {
  constructor() {
    super(...arguments)

    this.currentYear = new Date().getUTCFullYear();
  }
}
