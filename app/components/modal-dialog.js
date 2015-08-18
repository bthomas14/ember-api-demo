import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    console.log('modal-dialog opened successfully!');
  },
  actions: {
    close: function() {
      return this.sendAction();
    }
  }
});
