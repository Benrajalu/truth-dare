import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set('toggled', '');
  },
  actions:{
    toggleCard(){
      this.set('toggled', 'active');
    }
  }
});
