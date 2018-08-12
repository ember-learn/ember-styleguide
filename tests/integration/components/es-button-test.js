import { moduleForComponent, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent('es-button', 'Integration | Component | es button', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{es-button}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#es-button}}
      template block text
    {{/es-button}}
  `);

  assert.equal(
    this.$().text().trim(),
    'template block text'
  );
});

test('has html button tag and base class', function(assert) {
  this.render(hbs`{{es-button}}`);

  assert.ok(
    this.$('button'),
    'has button tag'
  );

  assert.ok(
    this.$('button').hasClass('es-button'),
    'has base es-button class'
  );
});

test('button supports font-awesome icon', function(assert) {
  const icon = 'fa-exit';

  this.setProperties({
    icon,
  });

  this.render(hbs`
    {{es-button
      icon=icon
    }}
  `);

  assert.ok(
    this.$('button').hasClass(icon),
    'has set icon class'
  );

  assert.ok(
    this.$('button').hasClass('button-icon'),
    'has class button-icon'
  );
});

test('can set button-block class', function(assert) {
  this.render(hbs`
    {{es-button
      isBlock=true
    }}
  `);

  assert.ok(
    this.$('button').hasClass('button-block'),
    'has button-block class'
  );
});

test('can display set label', function(assert) {
  const label = 'Button Label';

  this.setProperties({
    label,
  });

  this.render(hbs`
    {{es-button
      label=label
    }}
  `);

  assert.equal(
    this.$('button').text().trim(),
    label,
    'displays button label'
  );
});

test('calls closure function when clicked', function(assert) {
  const onClicked = sinon.spy();

  this.setProperties({
    onClicked,
  });

  this.render(hbs`
    {{es-button
      onClicked=onClicked
    }}
  `);

  run(() => {
    this.$('button').trigger('click');
  });

  assert.ok(
    onClicked.calledOnce,
    'onClicked called'
  );
});

test('can disable button', function(assert) {
  const disabled = false;

  this.setProperties({
    disabled,
  });

  this.render(hbs`
    {{es-button
      isDisabled=true
    }}
  `);

  assert.ok(
    this.$('button').is(':disabled'),
    'button is disabled'
  );
});

test('displays set data-role', function(assert) {
  const dataRole = 'some-data-role';

  this.setProperties({
    dataRole,
  });

  this.render(hbs`{{es-button}}`);

  assert.ok(
    this.$(`[data-role=${dataRole}]`),
    'set data-role is displayed'
  );
});

test('does not render aria-pressed unless set', function(assert) {
  const ariaPressed = 'false';

  this.setProperties({
    ariaPressed,
  });

  this.render(hbs`
    {{es-button
      ariaPressed=ariaPressed
    }}
  `);

  assert.ok(
    this.$(`button`).attr('aria-pressed'),
    'does have aria-pressed attribute'
  );

  run(() => {
    this.set('ariaPressed', null);
  });

  assert.notOk(
    this.$('button').attr('aria-pressed'),
    'does not have aria-pressed attribute'
  );
});
