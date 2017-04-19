import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    //this.setProperties({'list' : [], 'currentCard':'', 'pairedCard': ''};);
  },
  didReceiveAttrs() {
    this._super(...arguments);
    const current = this.get('current');
    const paired = this.get('paired');
    const originalList = this.get('cards');
    this.set('data', originalList);
    this.set('playerList', this.data.filterBy('author', current));
    this.set('pairedList', this.data.filterBy('author', paired));
    this.set('playerTruth', this.playerList.filterBy('active', true).filterBy('type', 'truth'));
    this.set('playerDare', this.playerList.filterBy('active', true).filterBy('type', 'dare'));
    this.set('pairedTruth', this.pairedList.filterBy('active', true).filterBy('type', 'truth'));
    this.set('pairedDare', this.pairedList.filterBy('active', true).filterBy('type', 'dare'));
    this.set('playerCard', 'active');
    this.set('pairCard', 'active');
  },
  actions:{
    newActives() {
      this.get('switch')();
    }
  }
});
