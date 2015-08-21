import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var that = this;
    var assignmentModel = this.modelFor('assignments.assignment');
    var edmodoApiKey = "12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d",
      assignment = assignmentModel.id,
      assignment_creator = "73240721"; // this could also be set to current user id with assignmentModel.creator.id

    // If assignment.id doesn't exist on the server bc it is user-created, return empty array
    if(!assignment) { return []; }

    var url = 'https://api.edmodo.com/assignment_submissions?assignment_id=' + assignment + '&assignment_creator_id=' + assignment_creator + '&access_token=' + edmodoApiKey;

    // Get Submissions from API and create records in store
    return new Ember.RSVP.Promise(function(resolve) {

      Ember.$.getJSON(url, function(submissions) {
        var submissionObjects = Ember.A();

        submissions.forEach(function(data) {
          var submission = [];
          // Check store for whether submission already exists,
          // If it does pull from store, otherwise create a new record
          var alreadyStored = that.store.hasRecordForId('submission', data.id);
          if(alreadyStored) {
            submission = that.store.find('submission', data.id);
          } else {
            submission = that.store.createRecord('submission', {
              id: data.id,
              creator: data.creator.first_name + " " + data.creator.last_name,
              avatar: data.creator.avatars.large,
              submitText: data.content,
              submitted_at: data.submitted_at
            });
          }
          submissionObjects.pushObject(submission);
        });
        resolve(submissionObjects);
      });
    }).catch(function(reason) {
      console.log('ajax call failed => ' + reason);
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model); // default template logic

    // If user hits submissions route, change Submissions tab to active
    var assignmentController = this.controllerFor('assignments.assignment');
    assignmentController.set('isShowingAssignment', false);
  },

  //Reset scrollbar at top of page
  activate: function() {
    this._super.apply(this, arguments);
  }

});
