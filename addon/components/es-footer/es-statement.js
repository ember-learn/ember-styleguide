import Component from 'sparkles-component';

export default class EsStatement extends Component {
  constructor() {
    super(...arguments)

    this.currentYear = new Date().getUTCFullYear();
  }
}
