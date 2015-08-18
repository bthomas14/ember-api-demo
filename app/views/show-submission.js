import Ember from 'ember';

export default Ember.View.extend({
  isShowing: false,

  actions: {
    toggleShow: function() {
      this.toggleProperty('isShowing');
    }
  }

});
