App = Ember.Application.create();

App.EmberTabsComponent = Ember.Component.extend({
  init: function() {
    this._super();
    this.set('panes', []); 
  },
  
  // An action called when one of the
  // tabs is clicked.
  select: function(pane) {
    this.set('selected', pane);
  },

  addPane: function(pane) {
    if (this.get('panes.length') == 0) this.select(pane);
    this.panes.pushObject(pane);
  },
  
  // select: function(currentPane) {
  //   this.panes.forEach(function(pane) {
  //     pane.set('isSelected', false);
  //   });
    
  //   currentPane.set('isSelected', true);
  // }
});

App.EmberPaneComponent = Ember.Component.extend({
  // Configures the component's element to have a
  // `tab-pane` class name, and to bind its `active`
  // class name to the `isSelected` property
  classNames: ['tab-pane'],
  classNameBindings: ['isSelected:active'],

  isSelected: function() {
    return this.get('parentView.selected') === this;
  }.property('parentView.selected'),
 
  /* When the pane is inserted into the DOM
     add it as a pane of it's parent, which is
     a TabsComponent
  */
  didInsertElement: function() {
    this.get('parentView').addPane(this);
  }
});
