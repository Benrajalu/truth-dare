import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  logger: Ember.inject.service('user'),
  init(){
    this.set('submitMessage', 'Login');
  },
  actions: {
    login: function(provider) {
      var scope = this;
      scope.setProperties({'submitMessage' : "Logging you in..."});
      if(!this.userEmail || !this.userPassword){
        this.setProperties({'submitMessage' : "Fill the blanks, asshat"});
      }
      this.get('session').open('firebase', {
        provider: provider,
        email: this.userEmail,
        password: this.userPassword
      }).then(function(data) {
        console.log(data.currentUser);
        var logUsIn = scope.get('logger').login(scope.userEmail);
        if(logUsIn){
          scope.transitionToRoute('index');
          scope.set('userEmail', '');
          scope.set('userPassword', '');
          scope.set('errorMessage', '');
          scope.set('submitMessage', 'Login');
        }
      }, function(reason) {
        console.log(reason.message);
        scope.setProperties({'errorMessage' : reason.message});
      });
    },
  }
});
