import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectDate (id) {
      // console.log(id);
      this.sendAction('selectDate', id);
    },
  },
});
