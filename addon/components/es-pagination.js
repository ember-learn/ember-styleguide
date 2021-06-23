import Component from '@glimmer/component';

const matcher = /\/content\/content-(\d+).json/;

export default class EsPaginationComponent extends Component {
  get previousId() {
    const matched = this.args.model.links.prev?.match(matcher);

    if (matched) {
      return matched[1];
    }

    return null;
  }

  get nextId() {
    const matched = this.args.model.links.next?.match(matcher);

    if (matched) {
      return matched[1];
    }

    return null;
  }
}
