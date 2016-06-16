import Ember from 'ember';

export default Ember.Component.extend({
  isQTextShowing: false,
  actions: {
    qtextShow: function(){
      this.set('isQTextShowing', true);
    },
    qtextHide: function(){
      this.set('isQTextShowing', false);
    },
    update(question, qparams) {
      this.sendAction('update', question, qparams);
    },
    delete(question){
      if (confirm('Are you sure you want to delete this question?')){
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
