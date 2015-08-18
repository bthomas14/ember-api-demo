import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('assignments', { path: '/' }, function() {
    this.route('assignment', { path: '/:assignment_id' }, function() {
      this.route('submissions', function() {
        this.route('show', { path: '/:submission_id' });
      });
    });
  });
});

Router.reopen({
  location: "history" // or "auto"
});

export default Router;
