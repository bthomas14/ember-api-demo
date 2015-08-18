import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

  model: function(params, transition) {
    var edmodoApiKey = '12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d',
        assignment = params.assignment_id;
    var url = 'https://api.edmodo.com/assignments/' + assignment +'?access_token=' + edmodoApiKey;

    return ajax({
      url: url,
      type: 'get'
    });
  },
  /*afterModel: function(controller, model) {
    debugger;
    //this._super(controller, model); // default template logic

    var appController = this.controllerFor('application');
    appController.set('isShowingAssignment', true);
  }*/
});
