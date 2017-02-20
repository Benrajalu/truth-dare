import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    toggleCard(taskType, author){
      console.log(taskType);
      var target = ".type-" + taskType;
      Ember.$('.card').each(function(){
        if(Ember.$(this).attr('id') === author){
          console.log("coucou here")
          Ember.$(this).find('.choice:not(' + target + ')').removeClass('active').addClass('passive');
          Ember.$(this).find(target).removeClass('passive').addClass('active');
        }
      })
    }
  }
});
