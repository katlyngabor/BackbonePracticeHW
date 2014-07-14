var View = Backbone.View.extend({
 
  template: function(model){
    return _.template($('#girls_list').html());
  },
 
  el: $('.container'),
 
  initialize: function(){
    this.render();
    this.collection.on('change', this.render, this);
    this.collection.on('destroy', this.render, this);
  },
 
  render: function(){
    this.$el.html( this.template(this.collection) )
  }
 
});