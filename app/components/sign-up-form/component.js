import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
    },

    // selectUserType (usertypevalue) {
    //   this.get('credentials').set('usertype', usertypevalue);
    // }
  },
});
