import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  log: Ember.inject.service('user'),
  init(){
    this.send('close');
    this.currentEmail = this.get('session').content.currentUser.email;
    this.user = this.get('log').login(this.currentEmail);
    this.set('sortDefinition', ["unique"]);
    this.set('sortedDares', Ember.computed.sort('model', 'sortDefinition'));
    //this.send('resetUser');
  },
  actions:{
    newActives(params){
      var scope = this;
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      // Make it all not active
      this.get('store').findAll('dare').then(function(dare){
        dare.forEach(function(data){
          data.set('active', false);
        });
        dare.save();
      });

      // Pick one of "mine" to be active
      var players=[params.email, params.pair];
      players.forEach(function(filter){
        scope.get('store').query('dare', { orderBy: 'author', equalTo: filter }).then(function(dare){
          var truths =  dare.filterBy('type', 'truth'),
              truthsLength = truths.get('length'),
              dares = dare.filterBy('type', 'dare'),
              dareLength = dares.get('length');

          var randomTruth = getRandomInt(0, truthsLength-1),
              randomDare = getRandomInt(0, dareLength-1);

          truths.forEach(function(data, index){
            if(index === randomTruth){
              data.set('active', true);
            }
          });

          dares.forEach(function(data, index){
            if(index === randomDare){
              data.set('active', true);
            }
          });

          dare.save();
        });
      });

      scope.set('sortDefinition', ["unique"]);
      scope.get('sortedDares').pushObject(Ember.computed.sort('model', 'sortDefinition'));
    },
  }
});
