import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],
  actions: {
    selectUserType (usertypevalue) {
      console.log('usertype is ', usertypevalue);
      // $('#usertype').val(usertypevalue);
      // console.log(this.get('usertype'));
      // this.get('credentials').set('usertype', usertypevalue);
  },
  }
});
