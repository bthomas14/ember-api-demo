import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingAssignment: true,

  actions: {
    toggleNav: function() {
      this.toggleProperty('isShowingAssignment');
    }
  }

});
