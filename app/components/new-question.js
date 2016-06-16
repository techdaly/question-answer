import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveq(){
      var qparams = {
        title: this.get('title'),
        asker: this.get('asker'),
        qtext: this.get('qtext'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveq', qparams);
    }
  }
});
