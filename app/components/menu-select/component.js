import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectDate (id) {
      // console.log('selectDate id is ', id);
      this.sendAction( 'selectDate', id );
    },
  },
});
