import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service('user'),
  actions: {
    init(){
      this.user = this.get('user').login('empty');
      this.set('mobileMenu', 'passive');
    },
    accessDenied: function() {
      this.transitionTo('login');
    },
    close() {
      this.get('closeMobile');
      console.log("coucou");
    },
    toggleMobile() {
      if(this.mobileMenu === 'passive'){
        this.set('mobileMenu', 'active');
      }
      else{
        this.set('mobileMenu', 'passive');
      }
    },
    resetUser(){
      if(this.get('session').content.isAuthenticated){
        var currentEmail = this.get('session').content.currentUser.email;
        this.user = this.get('user').login(currentEmail);
        return false;
      }
      else{
        return false;
      }
    }
  }
});
