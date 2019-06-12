import Controller from '@ember/controller';
import { computed } from '@ember/object';
import showdown from 'showdown';

export default Controller.extend({
  renderedContent: computed('model.content', function() {
    const converter = new showdown.Converter();
    return converter.makeHtml(this.model.content);
  })
})
