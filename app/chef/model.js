import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  profileurl: DS.attr('string'),
});
