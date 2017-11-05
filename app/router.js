import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('test-list', {path: '/'});
  this.route('test-detail', {path: 'test-detail/:test_id'});
});

export default Router;
