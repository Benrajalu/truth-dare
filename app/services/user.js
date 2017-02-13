import Ember from 'ember';

const User = Ember.Object.extend({
});

let user = User.create();


export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  logged: false,
  init() {
    this._super(...arguments);
    this.setProperties({'logged': false});
  },
  login(email) {
    if(email !== 'empty'){
      this.setProperties({'logged': true});
      this.get('store').query('user', { orderBy: 'email', equalTo: email }).then((result) => {
        user.set('email', result.get('content')[0]['_data']['email']);
        user.set('pair', result.get('content')[0]['_data']['pair']);
        user.set('name', result.get('content')[0]['_data']['name']);
        this.get('store').query('user', { orderBy: 'email', equalTo: user.pair }).then((result) => {
          user.set('pairName', result.get('content')[0]['_data']['name']);
        });
      });
    }
    else{
      this.setProperties({'logged': false});
      user.set('email', '');
      user.set('pair', '');
      user.set('name', '');
    }
    return(user);
  },
  logout() {
    console.log('login out now');
    user.set('email', '');
    user.set('pair', '');
    user.set('name', '');
  }
});
