import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveq(qparams) {
      var newQuestion = this.store.createRecord('question', qparams);
      newQuestion.save();
      this.transitionTo('index');
    },

    update(question, qparams){
      Object.keys(qparams).forEach(function(key){
        if(qparams[key]!==undefined){
          question.set(key,qparams[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
