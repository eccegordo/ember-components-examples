App = Ember.Application.create();

App.EmberHintComponent = Ember.Component.extend({
  mouseEnter: function(){
    this.set('hovered', true);
  },
  mouseLeave: function(){
    this.set('hovered', false)
  }
});

App.HintBubbleComponent = Ember.Component.extend({
  classNames: ['tooltip', 'fade'],
  classNameBindings: ['position', 'hovered:in:out'],
  hovered: function(){
    return this.get('parentView.hovered');
  }.property('parentView.hovered')
});