import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import { set, setProperties } from '@ember/object';
import {
  find,
  click,
  focus,
} from 'ember-native-dom-helpers';
import {
  run
} from '@ember/runloop';

let statuses, status, title, availability, panelIndex, accordionState;

moduleForComponent('es-accordion/es-panel', 'Integration | Component | es accordion/es panel', {
  integration: true,

  beforeEach() {
    statuses = [
      {
        status: 'shipped',
        label: 'Shipped',
        icon: 'fa-check-circle',
        color: 'success',
      },
    ];
    status = 'shipped';
    title = 'JavaScript Modules API';
    availability = null;
    panelIndex = 1;
    accordionState = {
      activePanel: null,
      focusIndex: null,
      setActivePanel: sinon.spy(),
      registerIndex: sinon.spy(),
      setFocusIndex: sinon.spy(),
    };

    setProperties(this, {
      availability,
      panelIndex,
      accordionState,
      status,
      statuses,
      title,
    });
  },

  afterEach() {
    statuses = status = title = availability = panelIndex = accordionState = null;
  },
});

test('it displays provided data', function(assert) {
  this.render(hbs`
    {{#es-accordion/es-panel
      availability=availability
      title=title
      status=status
      statuses=statuses
      panelIndex=panelIndex
      accordionState=accordionState
    }}
      template block text
    {{/es-accordion/es-panel}}
  `);

  assert.equal(find('.accordion-content').textContent.trim(), 'template block text');
  assert.equal(find('[data-role=title]').textContent.trim(), title);
  assert.equal(find('[data-role=availability]').textContent.trim(), 'Avail: Not yet available');
  assert.equal(find('[data-role=status]').textContent.trim(), statuses[0].label);

  run(() => {
    set(this, 'availability', 'Some availability');
  });

  assert.equal(find('[data-role=availability]').textContent.trim(), 'Avail: Some availability');
});

test('it correctly handles user inputs', function(assert) {
  this.render(hbs`
    {{#es-accordion/es-panel
      availability=availability
      title=title
      status=status
      statuses=statuses
      panelIndex=panelIndex
      accordionState=accordionState
    }}
      template block text
    {{/es-accordion/es-panel}}
  `);

  assert.ok(
    accordionState.registerIndex.calledOnce,
  );

  click('.accordion-heading');

  assert.ok(
    accordionState.setActivePanel.calledOnce,
  );

  focus('.button-icon');

  assert.ok(
    accordionState.setFocusIndex.calledOnce,
  );

  assert.ok(
    find('.accordion-body.collapse'),
  );

  run(() => {
    set(this, 'accordionState.activePanel', 1);
  });

  assert.notOk(
    find('.accordion-content.collapse'),
  );
});
