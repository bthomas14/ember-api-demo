import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function(params, transition) {
    var assignmentModel = this.modelFor('assignments.assignment');
    var edmodoApiKey = '12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d',
        assignment = assignmentModel.id,
        assignment_creator = assignmentModel.creator.id;
    var url = 'https://api.edmodo.com/assignment_submissions?assignment_id=' + assignment + '&assignment_creator_id=' + assignment_creator + '&access_token=' + edmodoApiKey;

    return ajax({
      url: url,
      type: 'get'
    });
  },
  /*setupController: function(controller, model) {
    this._super(controller, model); // default template logic

    var appController = this.controllerFor('assignments');
    appController.set('isShowingAssignment', false);
  }*/
});
