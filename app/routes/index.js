import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      answers: this.store.findAll('answer'),
      questions: this.store.findAll('question'),
    });
  },
  
  actions: {
    saveq(qparams) {
      var newQuestion = this.store.createRecord('question', qparams);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
