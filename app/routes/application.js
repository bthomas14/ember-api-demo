import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    // Opens modal box, accesible anywhere in app
    openModal: function(modalName, model) {
      var controller = this.controllerFor(modalName);
      controller.set('model', model);
      this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },

    // Closes modal box
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
