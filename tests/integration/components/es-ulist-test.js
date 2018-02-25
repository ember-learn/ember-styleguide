import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('es-ulist', 'Integration | Component | es ulist', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{es-ulist}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it render normal - list', function(assert) {

  assert.expect(3);

  const model = {
    id: 'listTitle',
    name: 'List Title',
    items: [{
        text: 'Resource Link'
    }, {
        text: 'Resource Link'
    }, {
        text: 'Changed Resource Link'
    }]
  };
  this.set('list', model);

  this.render(hbs`
    {{#es-ulist list=list as |item|}}
      {{es-ulist/text item=item}}
    {{/es-ulist}}
  `);

  assert.equal(this.$('.es-ulist ul .title').text().trim(), model.name, 'List title rendered');
  assert.equal(this.$('.es-ulist ul li:eq(0)').text().trim(), model.items[0].text, 'First Item rendered correctly');
  assert.equal(this.$('.es-ulist ul li:eq(2)').text().trim(), model.items[2].text, 'Third item in the list rendered correctly');
});

test('it render list with left image', function(assert) {
  assert.expect(2);

  const model = {
    id: 'listTitle',
    name: 'List with Images',
    items: [{
      text: '',
      src: ''
    }, {  
      text: '',
      src: ''
    }, {      
      text: '',
      src: ''
    }]
  };

  this.set('list', model);

  this.render(hbs`
    {{#es-ulist list=list as |item|}}
      {{es-ulist/image item=item}}
    {{/es-ulist}}
  `);

  assert.equal(this.$('.es-ulist ul .title').text().trim(), model.name, 'List Title rendered');
  assert.equal(this.$('.es-ulist ul li:eq(0) .es-ulist-image').length > 0, true, 'List with Image rendered');
});

test('it render image on left as default', function(assert) {
  assert.expect(2);

  const model = {
    id: 'listTitle',
    name: 'List with Images',
    items: [{
      text: 'Chris Nolan',
      src: ''
    }, {  
      text: 'Hans Zimmer',
      src: ''
    }, {      
      text: '',
      src: ''
    }]
  };

  this.set('list', model);

  this.render(hbs`
    {{#es-ulist list=list as |item|}}
      {{#es-ulist/image item=item as |item|}}
        {{es-ulist/text item=item isNonBlock=true}}
      {{/es-ulist/image}}
    {{/es-ulist}}
  `);

  assert.equal(this.$('.es-ulist ul li:eq(0) .es-ulist-image>div').attr('class').split(' ')[1], 'image-left', 'Image is rendered on left by default');
  assert.equal(this.$('.es-ulist ul li:eq(0) .image-left .es-ulist-text').text().trim(), model.items[0].text, 'Items text rendered');
});

test('it renders image on right when placement attribute is specified', function(assert) {
  assert.expect(2);

  const model = {
    id: 'listTitle',
    name: 'List with Images',
    items: [{
      text: 'Chris Nolan',
      ImgSrc: ''
    }, {  
      text: 'Hans Zimmer',
      ImgSrc: ''
    }, {      
      text: '',
      ImgSrc: ''
    }]
  };

  this.set('list', model);

  this.render(hbs`
    {{#es-ulist list=list as |item|}}
      {{#es-ulist/image item=item placement="right" as |item|}}
        {{es-ulist/text item=item isNonBlock=true}}
      {{/es-ulist/image}}
    {{/es-ulist}}
  `);

  assert.equal(this.$('.es-ulist ul li:eq(0) .es-ulist-image>div').attr('class').split(' ')[1], 'image-right', 'Image is rendered on left by default');
  assert.equal(this.$('.es-ulist ul li:eq(0) .es-ulist-image .es-ulist-text').text().trim(), model.items[0].text, 'Items text rendered');
});


test('should render icons on the left', function(assert) {
  assert.expect(2);

  const model = {
    id: 'listTitle',
    name: 'List with Icons',
    items: [{
      text: 'Chris Nolan',
      src: ''
    }, {
      text: 'Hans Zimmer',
      src: ''
    }]
  };

  this.set('list', model);

  this.render(hbs`
    {{#es-ulist list=list as |item|}}
      {{#es-ulist/image item=item isIcon=true as |item|}}
        {{es-ulist/text item=item isNonBlock=true}}
      {{/es-ulist/image}}
    {{/es-ulist}}
  `);

  assert.equal(this.$('.es-ulist ul .title').text().trim(), model.name, 'Title rendered');
  assert.equal(this.$('.es-ulist ul li:eq(0) .es-ulist-image .icons').length > 0, true, 'List with icons rendered');
});

test('it renders a list with links', function(assert) {
  assert.expect(2);

  const model = {
    id: 'listTitle',
    name: 'List with Links',
    items: [{
      text: 'Resource Link',
      route: 'learn'
    }, {
      text: 'Resource Link',
      route: 'learn'
    }]
  };

  this.set('list', model);

  this.render(hbs`
    {{#es-ulist list=list as |item|}}
      {{es-ulist/link item=item}}
    {{/es-ulist}}
  `);

  assert.equal(this.$('.es-ulist ul .title').text().trim(), model.name, 'List title rendered');
  assert.equal(this.$('.es-ulist ul li:eq(0) a').length > 0, true, 'List items rendered');
});

test('should render list with images and links', function(assert) {
  assert.expect(2);

  const model = {
    id: 'listTitle',
    name: 'List with Links',
    items: [{
      text: 'Resource Link',
      route: 'learn',
      src: ''
    }, {
      text: 'Resource Link',
      route: 'learn',
      src: ''
    }]
  };

  this.set('list', model);

  this.render(hbs`
    {{#es-ulist list=list as |item|}}
      {{#es-ulist/image item=item as |item|}}
        {{es-ulist/link item=item}}
      {{/es-ulist/image}}
    {{/es-ulist}}
  `);

  assert.equal(this.$('.es-ulist ul li:eq(0) .es-ulist-image').length > 0, true, 'Rendered list with image');
  assert.equal(this.$('.es-ulist ul li:eq(0) a').length > 0, true, 'Rendered list with anchor tag');
});