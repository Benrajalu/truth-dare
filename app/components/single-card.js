import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
  },
  actions:{
    removeThis(id){
      this.sendAction('removeThis', id);
    }
  }
});
