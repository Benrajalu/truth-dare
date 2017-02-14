import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  log: Ember.inject.service('user'),
  init(){
    this.send('close');
    this.currentEmail = this.get('session').content.currentUser.email;
    this.user = this.get('log').login(this.currentEmail);
    this.set('type', 'truth');
  },
  actions:{
    selectType(value) {
      console.log(value);
      this.set('type', value);
    },
    publishPost: function() {
      var button = document.getElementById('submit');
      if(this.get('task')){
        var store = this.get('store');
        var scope =  this;
        button.innerHTML= 'Uploading...';
        var newPost = store.createRecord('dare', {
          task: this.get('task'),
          id: new Date().getTime(),
          type: scope.get('type'),
          unique: "task" + new Date().getTime(),
          active: false,
          author: this.get('user').email
        });
        newPost.save().then(function() {
          button.innerHTML= 'Submit a new one';
          document.getElementById('new-post-form').reset();
          scope.set('task', '');
          scope.set('id', '');
          scope.set('type', 'truth');
          scope.transitionToRoute('listing');
        }, function() {
          button.innerHTML= "Well it's a dud";
        });
      }
      else{
        button.innerHTML= 'Please fill out all the fields';
      }
    }
  },
  options:{
    height: 200,
    inline: false,
    force_br_newlines: false,
    force_p_newlines: true,
    forced_root_block: 'p',
    menubar: false,
    statusbar: false,
    plugins: [
        "advlist autolink lists link charmap anchor",
        "searchreplace",
    ],
    toolbar: "undo redo | bold | link",
    body_class: 'tinyMCE-editor',
    content_css : '/assets/dare-two.css'
  }
});
