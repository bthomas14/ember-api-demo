import DS from 'ember-data';

export default DS.Model.extend({
  creator: DS.attr('string'),
  avatar: DS.attr('string'),
  submitText: DS.attr('string'),
  submitted_at: DS.attr('date'),
  assignment: DS.belongsTo('assignment', { async: true })
});
