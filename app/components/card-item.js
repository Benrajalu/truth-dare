import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set('current', 'truth');
    this.set('currentIsTruth', true);
  },
  didReceiveAttrs() {
    this._super(...arguments);
    console.log(this.get('truth'));
  },
  actions:{
    switchCurrent(type){
      var scope = this;
      if(type==="dare"){
        scope.set('current', 'dare');
        scope.set('currentIsTruth', false);
      }
      else{
        scope.set('current', 'truth');
        scope.set('currentIsTruth', true);
      }
    }
  }
});
