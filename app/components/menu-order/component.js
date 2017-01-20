import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

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
        this.get('flashMessages').warning('Oops! Looks like a field is missing!');
        return;
      }
      data.menu = this.get('menu'); // identifying which menu the order belongs to
      this.sendAction('createOrder', data);
      this.set('newOrder', '');
    },
    voteUp () {
      // console.log('vote for meeee', this.get('menu.vote'));
      let data = this.get('menu');
      // console.log(data);
      this.sendAction( 'voteUp', data );
    },
  },
});
