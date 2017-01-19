import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancelOrder () {
      // console.log('cancel ', this.get('myorder'));
      this.sendAction('cancelOrder', this.get('myorder'));
    }
  }
});
