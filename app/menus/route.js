import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('menu', {reload: true})
      .then(menus=>menus.sortBy('date'));
  },
  actions: {
    selectDate (id) {
      this.transitionTo('menus/orders', id);
    }
  }
});
