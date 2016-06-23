import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions:{
    updateAnswerForm(){
      this.set('updateAnswerForm', true);
    },

    update(answer) {
      var aparams = {
        responder: this.get('responder'),
        atext: this.get('atext'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, aparams);
    }
  }
});
