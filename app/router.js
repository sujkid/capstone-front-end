import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('landingpage');
  this.route('menus');
  this.route('menu', { path: 'menus/:menu_id' }, function() {
    this.route('order');
  });
  // this.route('orders',{ path: 'menus/:menu_id' });
  this.route('menus/orders',{ path: 'menus/orders/:menu_id' });
  // this.route('menu/edit', { path: 'lists/:list_id/edit' });
  this.route('chefs');
});

export default Router;
