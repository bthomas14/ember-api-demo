import Ember from 'ember';

export function dateFormatted(date) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var formattedDate = new Date(date);
  formattedDate = monthNames[formattedDate.getMonth()] + " " + formattedDate.getDate() + ", " + formattedDate.getFullYear();
  return formattedDate;
}

export default Ember.HTMLBars.makeBoundHelper(dateFormatted);
