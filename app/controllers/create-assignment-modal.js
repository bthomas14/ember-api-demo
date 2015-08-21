import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['assignments'],

  actions: {
    createAssignment: function() {
      // If we were persisting to API, we would instead do an ajax POST
      // Since we're not, this data will disappear on refresh, no id is created
      var newAssignment = this.store.createRecord('assignment', {
        title: this.get('assignmentTitle'),
        due_at: this.get('assignmentDue'),
        description: this.get('assignmentDesc')
      });

      this.controllerFor('assignments').get('model').pushObject(newAssignment);


      // Reset form values
      this.set('assignmentTitle', "");
      this.set('assignmentDue', null);
      this.set('assignmentDesc', "");

      this.send('closeModal');
    },
    close: function() {
      console.log('in modalController.close');
      return this.send('closeModal');
    }
  }
});
