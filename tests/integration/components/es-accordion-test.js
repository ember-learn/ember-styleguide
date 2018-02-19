import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import { find, click, focus, keyEvent, findAll } from 'ember-native-dom-helpers';
import {
  get,
  set,
  setProperties,
} from '@ember/object';
import {
  run
} from '@ember/runloop';

let activePanel, focusIndex;

moduleForComponent('es-accordion', 'Integration | Component | es accordion', {
  integration: true,

  beforeEach() {
    activePanel = null;
    focusIndex = null;

    setProperties(this, {
      activePanel,
      focusIndex
    });
  },

  afterEach() {
    activePanel = focusIndex = null;
  },
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#es-accordion
      as |accordionState|
    }}
      {{#es-accordion/es-panel
        title="Accordion Item Title"
        status="shipped"
        panelIndex=0
        accordionState=accordionState
      }}
        template block text
      {{/es-accordion/es-panel}}
    {{/es-accordion}}
  `);

  assert.equal(find('.accordion-heading > .content').textContent.trim(), 'Accordion Item Title');
});

test('it correctly handles user input', function(assert) {
  this.render(hbs`
    {{#es-accordion
      activePanel=activePanel
      focusIndex=focusIndex
      as |accordionState|
    }}
      {{#es-accordion/es-panel
        title="Accordion Item Title"
        status="shipped"
        panelIndex=0
        accordionState=accordionState
      }}
        template block text
      {{/es-accordion/es-panel}}
    {{/es-accordion}}
  `);

  assert.ok(
    find('.accordion-body.collapse'),
    'accordion is collapsed'
  );

  click('.accordion-heading');

  assert.equal(get(this, 'activePanel'), 0);
  assert.notOk(
    find('.accordion-body.collapse'),
    'accordion is expended'
  );

  focus('[data-role=accordion-item-button]');

  assert.equal(
    get(this, 'focusIndex'),
    0,
    'the focus index changes on focus'
  );
});

test('it correctly handles keyboard input', function(assert) {
  this.render(hbs`
    {{#es-accordion
      activePanel=activePanel
      focusIndex=focusIndex
      as |accordionState|
    }}
      {{#es-accordion/es-panel
        title="First Accordion Item"
        status="shipped"
        panelIndex=23
        accordionState=accordionState
      }}
        template block text
      {{/es-accordion/es-panel}}
      {{#es-accordion/es-panel
        title="Second Accordion Item"
        status="shipped"
        panelIndex=25
        accordionState=accordionState
      }}
        template block text
      {{/es-accordion/es-panel}}
    {{/es-accordion}}
  `);

  //Focus
  focus(findAll('[data-role=accordion-item-button]')[0]);

  assert.equal(
    get(this, 'focusIndex'),
    23
  );

  //Home 36
  keyEvent(findAll('[data-role=accordion-item-button]')[0], 'keydown', 36);

  assert.equal(
    get(this, 'activePanel'),
    23
  );

  run(() => {
    setProperties(this, {
      activePanel: null,
      focusIndex: null,
    });
  });

  //End 35
  focus(findAll('[data-role=accordion-item-button]')[0]);
  keyEvent(findAll('[data-role=accordion-item-button]')[0], 'keydown', 35);

  assert.equal(
    get(this, 'activePanel'),
    25
  );

  //Arrow Up 38

  //Arrow Down 40

  //Enter 13 Space 32
});
