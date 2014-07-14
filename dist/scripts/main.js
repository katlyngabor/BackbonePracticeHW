var Person = Backbone.Model.extend({
			
			defaults: {
				name:'',
				children: [''],
				hobbies: [''],
			},

			idAttribute:"_id",

			initialize: function() {
				var name = this.get('name');
				console.log( name + ' is now a person.');
			}

});

var katlyn = new Person ({
	name:'Katlyn',
	age: 26,
	children: ['Madelyn', 'Penelope']
	
});



var People = Backbone.Collection.extend ({
		model: Person,
		url: "http://tiy-atl-fe-server.herokuapp.com/collections/katlyn"

});

 
var girls = new People();




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
// Fetching the data & creating my view
girls.fetch().done(function () {
  new View( { collection: girls } );
});
 
// Creating a new student
var ingrid = new Person({ name: 'Ingrid' });

 
 
// // I could also do some updating to my view
// var s = all_students.findWhere({name: "NAME"});
// s.set('location', 'Idaho');
// s.destroy();