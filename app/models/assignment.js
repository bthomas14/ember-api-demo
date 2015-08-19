import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  due_at: DS.attr('date'),
  description: DS.attr('string')
});
