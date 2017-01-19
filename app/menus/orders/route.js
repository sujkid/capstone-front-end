import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('menu', params.menu_id);
  },
  actions: {
    createOrder(newOrder) {
      // console.log('hey, i am going to create an order', newOrder);
      let order = this.get('store').createRecord('order', newOrder);
      // console.log("inside the route create order, newOrder is " , order);
      order.save()
        .then(() => this.get('flashMessages').success('Check your cart for your order!'));
    },
    voteUp (menu) {
      // console.log('am i here??', menu.data.votes);
      // menu.data.votes++;
      menu.save();
    },
  }
});
