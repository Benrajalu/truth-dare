import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  logger: Ember.inject.service('user'),
  init(){
    this.set('mobileMenu', 'passive');
    if(this.get('session').content.isAuthenticated){
      var currentEmail = this.get('session').content.currentUser.email;
      this.user = this.get('logger').login(currentEmail);
    }
    else{
      this.user = this.get('logger').login("empty");
    }
  },
  actions: {
    invalidateSession() {
      this.get('logger').logout();
      this.get('session').close();
      this.transitionToRoute('login');
    },
    logOut() {
      this.get('logger').logout();
    },
    toggleMobile() {
      if(this.mobileMenu === 'passive'){
        this.set('mobileMenu', 'active');
      }
      else{
        this.set('mobileMenu', 'passive');
      }
    },
    closeMenu() {
      this.set('mobileMenu', 'passive');
    }
  }
});
