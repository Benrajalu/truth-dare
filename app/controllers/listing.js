import Ember from 'ember';


export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  user: Ember.inject.service('user'),
  init(){
    this.send('close');
    this.currentEmail = this.get('session').content.currentUser.email;
    this.user = this.get('user').login(this.currentEmail);
    this.set('sortDefinition', ["unique"]);
    this.set('myList', Ember.computed.sort('model', 'sortDefinition'));
    this.send('resetUser');
    this.set('currentPlayer', true);
  },
  actions:{
    toggleList(){
      this.toggleProperty('currentPlayer');
      console.log(this.get('currentPlayer'));
    }
  }
});
