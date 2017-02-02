import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // debugger;
    let data = this.get('store').createRecord('menu', {});
    return data;
  },
  actions: {
    saveMenu (menu) {
      menu.save();
    },
    cancel (menu) {
      menu.rollbackAttributes();
      // this.transitionTo('menus');
    }
  }
});
