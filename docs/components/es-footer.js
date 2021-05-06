
// this is a hack to make porting much eaiser. you need to convert this to a glimmer component
import Controller from '@ember/component';
import {
  socialLinks,
  infoLinks,
  contributorLinks
} from 'dummy/data/footer';


export default Controller.extend({
  socialLinks,
  infoLinks,
  contributorLinks
});
