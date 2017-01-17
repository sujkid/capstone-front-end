import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('menu');
  },
  actions: {
    selectDate (id) {
     // this.set(menues,id);
    // let data = this.get('store').findRecord('menu', id);
  //    console.log('data is ', data);
    //return this.get('store').findRecord('menu', id)
        // .then(this.transitionTo('menu'));
        // debugger;
        this.transitionTo('menus/orders', id);
    }
  }
});
