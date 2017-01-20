import DS from 'ember-data';

export default DS.Model.extend({
  destaddress: DS.attr('string'),
  quantity: DS.attr('number'),
  foodname: DS.attr('string'),
  date: DS.attr('string'),
  price: DS.attr('number'),
  menu: DS.belongsTo('menu'),
});
