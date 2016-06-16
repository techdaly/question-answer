import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions:{
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var qparams = {
        title: this.get('title'),
        asker: this.get('asker'),
        qtext: this.get('qtext'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, qparams);
    }
  }
});
