import Ember from 'ember';
// import SideMenuToggle from "ember-side-menu/components/side-menu-toggle";


export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
