import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init(){
    this._super(...arguments);
    this.setProperties({'list' : []});
  },
  didReceiveAttrs() {
    this._super(...arguments);
    const profile = this.get('filter');
    const originalList = this.get('data');
    this.set('data', originalList);
    this.set('dares', this.data.filterBy('author', profile).sortBy('type').filterBy('type', 'dare'));
    this.set('truths', this.data.filterBy('author', profile).sortBy('type').filterBy('type', 'truth'));
  },
  actions:{
    deleteRecord(id){
      var store = this.get('store');
      if(confirm('Are you really really sure?')){
        store.findRecord('dare', id, { backgroundReload: false }).then(function(dare) {
          dare.destroyRecord(); // => DELETE to /posts/2
        });
      }
    },
  }
});
