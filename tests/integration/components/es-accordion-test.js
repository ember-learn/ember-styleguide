import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, click, focus, keyEvent, findAll } from 'ember-native-dom-helpers';
import {
  get,
  setProperties,
} from '@ember/object';


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

  assert.equal(
    find('.accordion-heading > .content').textContent.trim(),
    'Accordion Item Title',
    'correct title is displayed'
  );
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

  assert.equal(
    get(this, 'activePanel'),
    0,
    'Clicking on an accordion element heading set it as active'
  );

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

  /* Focus */
  focus(findAll('[data-role=accordion-item-button]')[0]);

  assert.equal(
    get(this, 'focusIndex'),
    23,
    'Focusing on an accordion element sets its id to focusIndex'
  );

  /* Home: 36 */
  keyEvent(findAll('[data-role=accordion-item-button]')[0], 'keydown', 36);

  assert.equal(
    get(this, 'activePanel'),
    23,
    'Keydown on "Home" sets the bottom accordion element as active'
  );

  /* End: 35 */
  keyEvent(findAll('[data-role=accordion-item-button]')[0], 'keydown', 35);

  assert.equal(
    get(this, 'activePanel'),
    25,
    'Keydown on "End" sets the bottom accordion element as active'
  );

  /* Arrow Up: 38 */
  keyEvent(findAll('[data-role=accordion-item-button]')[0], 'keydown', 38);

  assert.equal(
    get(this, 'activePanel'),
    23,
    'Keydown on "Arrow Up" set previous accordion element as active'
  );

  /* Arrow Down: 40 */
  keyEvent(findAll('[data-role=accordion-item-button]')[0], 'keydown', 40);

  assert.equal(
    get(this, 'activePanel'),
    25,
    'Keydown on "Arrow Down" set next accordion element as active'
  );

  /* Space: 32 */
  focus(findAll('[data-role=accordion-item-button]')[1]);
  keyEvent(findAll('[data-role=accordion-item-button]')[1], 'keydown', 32);

  assert.equal(
    get(this, 'activePanel'),
    null,
    'Keydown on "Space" removes the current accordion element from being active'
  );

  assert.ok(
    findAll('.accordion-body')[1].className.includes('collapse'),
    'accordion is collapsed'
  );

  /* Enter: 13 */
  keyEvent(findAll('[data-role=accordion-item-button]')[1], 'keydown', 13);

  assert.equal(
    get(this, 'activePanel'),
    25,
    'Keydown on "Enter" set the current accordion element as active'
  );

  assert.notOk(
    findAll('.accordion-body')[1].className.includes('collapse'),
    'accordion is expanded'
  );
});
