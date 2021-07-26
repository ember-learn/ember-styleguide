window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: 'silence', matchId: 'ember-global' },
    { handler: 'silence', matchId: 'ember.component.reopen' },
    {
      handler: 'silence',
      matchId: 'deprecated-run-loop-and-computed-dot-access',
    },
    { handler: 'silence', matchId: 'this-property-fallback' },
    { handler: 'silence', matchId: 'ember.built-in-components.import' },
    { handler: 'silence', matchId: 'routing.transition-methods' },
    { handler: 'silence', matchId: 'manager-capabilities.modifiers-3-13' },
    { handler: 'silence', matchId: 'ember-test-waiters-legacy-module-name' },
  ],
};
