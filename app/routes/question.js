import Ember from 'ember';

export default Ember.Route.extend({
  model(qparams) {
    return this.store.findRecord('question', qparams.question_id);
  },
  actions: {
    update(question, qparams) {
      Object.keys(qparams).forEach(function(key){
        if(qparams[key]!==undefined) {
          question.set(key,qparams[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    savea(aparams) {
      var newAnswer = this.store.createRecord('answer', aparams);
      newAnswer.save();
      this.transitionTo('index');
    }

  }
});
