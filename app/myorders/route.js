import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let data = this.get('store').findAll('order');
    return data;
  },
  actions : {
    cancelOrder (myorder) {
      // console.log('myorder');
      myorder.destroyRecord();
    },
  },
});
