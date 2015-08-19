import Ember from 'ember';

export default Ember.Controller.extend({
  //isShowingAssignment: true,

  isIndex: function() {
    if(this.get('currentPath') == "assignments.index") {
      return true;
    } else {
      return false;
    }
  }.property('currentPath'),

  /*actions: {
    toggleNav: function() {
      this.toggleProperty('isShowingAssignment');
    }
  }*/
});
