import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  user: Ember.inject.service('user'),
  model: function() {
    if(this.get('session').content.isAuthenticated){
      return this.get('store').findAll('dare');
    }
  }
});
