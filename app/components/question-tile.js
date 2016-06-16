import Ember from 'ember';

export default Ember.Component.extend({
  isQTextShowing: false,
  actions: {
    qtextShow: function(){
      this.set('isQTextShowing', true);
    },
    qtextHide: function(){
      this.set('isQTextShowing', false);
    }
  }
});
