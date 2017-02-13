import DS from 'ember-data';

export default DS.Model.extend({
  active: DS.attr('boolean'),
  task: DS.attr('string'),
  author: DS.attr('string'),
  unique: DS.attr('string'),
  type: DS.attr('string'),
});
