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
      var answer_deletions = question.get('answers').map(function(answer) {
    return answer.destroyRecord();
  });
  Ember.RSVP.all(answer_deletions).then(function() {
    return question.destroyRecord();
  });
      this.transitionTo('index');
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
    },

    savea(aparams) {
      var newAnswer = this.store.createRecord('answer', aparams);
      var question = aparams.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
    }

  }
});
