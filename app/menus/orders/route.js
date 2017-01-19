import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('menu', params.menu_id);
  },
  actions: {
    createOrder(newOrder) {
      // console.log('hey, i am going to create an order', newOrder);
      let order = this.get('store').createRecord('order', newOrder);
      // console.log("inside the route create order, newOrder is " , order);
      order.save();
    },
    voteUp (menu) {
      // console.log('am i here??', menu.data.votes);
      // menu.data.votes++;
      menu.save();
    },
  }
});
