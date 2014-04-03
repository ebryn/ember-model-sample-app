var attr = Ember.attr;

var Test = Ember.Model.extend({
  id: attr(),
  name: attr()
});

Test.reopenClass({
  FIXTURES: [
    {id: 1, name: "Test record"}
  ]
});

export default Test;