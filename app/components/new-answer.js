import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
    },

    savea() {
      var aparams = {
        responder: this.get('responder'),
        atext: this.get('atext'),
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('savea', aparams);
    }
  }
});
