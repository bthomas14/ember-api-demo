import Ember from 'ember';

export default Ember.Component.extend({
  isShowingDetails: false,

  // By default, do not show expanded submissions
  didInsertElement: function() {
    this.set('isShowingDetails', false);
  },

  actions: {
    // show student submission
    showDetails: function() {
      this.toggleProperty('isShowingDetails');
    }
  }
});
