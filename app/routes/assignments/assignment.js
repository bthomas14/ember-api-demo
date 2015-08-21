import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    // Get the appropriate record that was stored in assignments route
    return this.store.find('assignment', params.assignment_id);
  },

  afterModel: function(controller, model) {
    this._super(controller, model); // default template logic

    // If user goes to assignments.assignment, change "Assignment" tab to active
    var assignmentController = this.controllerFor('assignments.assignment');
    assignmentController.set('isShowingAssignment', true);
  },

  //Reset scrollbar at top of page
  activate: function() {
    this._super.apply(this, arguments);
  },
});
