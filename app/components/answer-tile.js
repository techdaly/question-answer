import Ember from 'ember';

export default Ember.Component.extend({
  fullAnswer: Ember.computed('answer.question.title', 'answer.responder', function(){
    return this.get('answer.responder') + ' ::: ' + this.get('answer.question.title');
  }),

  actions: {
    delete(answer){
      if (confirm('Are you sure you want to delete this answer?')){
        this.sendAction('destroyAnswer', answer);
      }
    },

    update(answer, aparams) {
      Object.keys(aparams).forEach(function(key){
        if(aparams[key]!==undefined) {
          answer.set(key,aparams[key]);
        }
      });
      answer.save();
    },
  }
});
