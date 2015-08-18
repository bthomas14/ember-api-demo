import Ember from 'ember';

export default Ember.Component.extend({
  isShowingDetails: false,

  didInsertElement: function(item) {
    this.set('isShowingDetails', false);
  },

  actions: {
    // show student submission
    showDetails: function() {
      this.toggleProperty('isShowingDetails');
    }
  }
});
