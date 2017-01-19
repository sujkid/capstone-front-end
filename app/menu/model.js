import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr('number'),
  foodname: DS.attr('string'),
  fooddescription: DS.attr('string'),
  votes: DS.attr('number'),
  foodurl: DS.attr('string'),
  date: DS.attr('string'),
  user_id: DS.hasMany('menus'),
  price: DS.attr('number'),
});
