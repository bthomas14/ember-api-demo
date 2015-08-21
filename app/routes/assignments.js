import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var that = this;
    var edmodoApiKey = '12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d';
    var url = 'https://api.edmodo.com/assignments?access_token=' + edmodoApiKey;
    // Make call to API
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON(url, function(assignments) {
        var assignmentObjects = Ember.A();

        // For each record passed from API, create a record in the store, and push to our assignmentObjects array
        assignments.forEach(function(data) {
          var assignment = that.store.createRecord('assignment', {
            id: data.id,
            title: data.title,
            due_at: new Date(data.due_at),
            description: data.description
          });
          assignmentObjects.pushObject(assignment);
        });
        resolve(assignmentObjects);
      });
    });
  }

});
