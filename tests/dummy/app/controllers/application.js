import Controller from '@ember/controller';

const components = [
  'button',
  'footer',
  'header',
  'navbar',
  'note',
  'page-header',

  // TODO: consider deleting the component
  // 'accordion',
  // 'aside',
  // 'buttonbar',
  // 'card',
  // 'codesample',
  // 'datatable',
  // 'form',
  // 'heading',
  // 'main',
  // 'nav',
  // 'pagewrapper',
  // 'search',
  // 'ulist',
]

export default Controller.extend({
  components,
})
