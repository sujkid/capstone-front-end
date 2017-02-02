import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editMenu () {
      console.log('inside edit');
      // this.sendAction('editMenu', this.get('menu'));
      // this.transitionTo('addmenu');
    },
    deleteMenu () {
      this.sendAction('deleteMenu', this.get('menu'));
    }
  },
});
