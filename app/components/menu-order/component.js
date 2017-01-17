import Ember from 'ember';

export default Ember.Component.extend({
  newOrder: {
    destaddress: null,
    quantity: null,
  },
  actions: {
    createOrder () {
      console.log('order create', this.get('newOrder'));
      let data = this.get('newOrder');
      // console.log('data is ', data);
      data.menu = this.get('menu'); // identifying which menu the order belongs to
      this.sendAction('createOrder', data);
    }
  }
});
