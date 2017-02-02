import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

  menu: {
    foodname: null,
    fooddescription: null,
    foodurl: null,
    date: null,
    price: null,
  },

  actions: {
    saveMenu () {

      // if(!this.get('menu.foodname') || !this.get('menu.fooddescription') ||
      //    !this.get('menu.foodurl') || !this.get('menu.date') ||
      //    !this.get('menu.price'))
      //   this.get('flashMessages').warning('Oops! Looks like a field is missing!');
      //   return;
      // }
      if(!this.get('menu.foodname') || !this.get('menu.fooddescription') ||
         !this.get('menu.foodurl') || !this.get('menu.date') ||
         !this.get('menu.price')) {
        this.get('flashMessages').warning('Oops! Looks like a field is missing!');
        return;
      }

      this.sendAction('saveMenu', this.get('menu'));
      this.set('menu', '');
    },

    cancel () {
      this.sendAction('cancel', this.get('menu'));
    },
  },
});
