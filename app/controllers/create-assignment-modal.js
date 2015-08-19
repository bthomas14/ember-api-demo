import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['assignments'],

  debugModal: function() {
    console.log('in modalController');
  }.on('init'),

  actions: {
    createAssignment: function(model) {
      var title = this.get('assignmentTitle'),
          due_at = this.get('assignmentDue'),
          description = this.get('assignmentDesc');

      //var appController = this.controllerFor('assignments');
      this.get('model').pushObject({
        title: title,
        due_at: due_at,
        description: description,
        id: Math.floor(Math.random()*10000000),
        isNew: true
      });

      this.set('assignmentTitle', ""),
      this.set('assignmentDue', null),
      this.set('assignmentDesc', "");

      this.send('closeModal');

    },
    close: function() {
      console.log('in modalController.close');
      return this.send('closeModal');
    }
  }
});
