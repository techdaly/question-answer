import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  asker: DS.attr(),
  title: DS.attr(),
  qtext: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),


});
