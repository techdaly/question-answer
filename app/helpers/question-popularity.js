import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >= 4) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire" style="color: #fc361d"></span>')
  } else if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-exclamation-sign"></span>')
  }
}

export default Ember.Helper.helper(questionPopularity);
