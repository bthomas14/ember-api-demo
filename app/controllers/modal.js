import Ember from 'ember';

export default Ember.Controller.extend({
  debugModal: function() {
    console.log('in modalController');
  }.on('init'),
  
  actions: {
    close: function() {
      console.log('in modalController.close');
      return this.send('closeModal');
    },
    //test
    click: function() {
      console.log("in modalController.click");
      this.send('click');
    }
  }
});
