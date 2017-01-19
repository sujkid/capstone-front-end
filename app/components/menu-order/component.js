import Ember from 'ember';

export default Ember.Component.extend({
  newOrder: {
    destaddress: null,
    quantity: null,
  },
  actions: {
    createOrder () {
      // console.log('order create', this.get('newOrder'));
      let data = this.get('newOrder');
      // console.log('data is ', data);
      if(!this.get('newOrder.destaddress') || !this.get('newOrder.quantity')) {
        return;
      }
      data.menu = this.get('menu'); // identifying which menu the order belongs to
      this.sendAction('createOrder', data);
    },
    voteUp (menu) {
      // console.log('vote for meeee', this.get('menu.vote'));
      let data = this.get('menu');
      // console.log(data);
      this.sendAction( 'voteUp', data );
    },
  },
});
