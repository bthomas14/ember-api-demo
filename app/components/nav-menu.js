import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['list-group-item'],
  classNameBinding: ['isSelected:active'],
  isSelected: false,

  didInsertElement: function(params) {

  },

  click: function(item) {
    debugger;
    this.set('isSelected', true)
  }
});
