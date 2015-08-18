import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    var edmodoApiKey = '12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d';
    return ajax({
      url: 'https://api.edmodo.com/assignments?access_token=' + edmodoApiKey,
      type: 'get'
    }).then(function(assignments) {
      assignments.forEach(function(assignment) {
        assignment.id = assignment.id;
        assignment.title = assignment.title;
        assignment.due_at = new Date(assignment.due_at);
        assignment.description = assignment.description;
        //var str = assignment.title.toLowerCase();
        //assignment.id = str.replace(/\s/g, '-');;
      });
      return assignments;
    });
  },

  actions: {
    openModal: function(modalName, model) {
      var controller = this.controllerFor(modalName);
      controller.set('model', model);

      //fix to clear controller state for modalcontroller
      if (modalName == 'modal') {
        //controller.set('email_whitelisted', false);
        //controller.set('need_email', true);
        //controller.set('requestEmail', null);
      }

      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
  }
});
